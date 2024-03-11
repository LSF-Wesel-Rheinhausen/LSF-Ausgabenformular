import logging
import smtplib
from pathlib import Path
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.utils import formatdate
from email import encoders

from werkzeug.utils import secure_filename


def send_mail(send_from, send_to, subject, message, files,
              server="localhost", port=587, username='', password='',
              use_tls=True):
    """Compose and send email with provided info and attachments.

    Args:
        send_from (str): from name
        send_to (list[str]): to name(s)
        subject (str): message title
        message (str): message body
        files (list[str]): list of file paths to be attached to email
        server (str): mail server host name
        port (int): port number
        username (str): server auth username
        password (str): server auth password
        use_tls (bool): use TLS mode
    """

    msg = MIMEMultipart()
    msg['From'] = send_from
    msg['To'] = ', '.join(send_to)
    msg['Date'] = formatdate(localtime=True)
    msg['Subject'] = subject

    for file in files:
        filename = secure_filename(file.filename)
        part = MIMEBase('application', "octet-stream")
        with open(f'./temp/{filename}', 'rb') as temp_file:
            part.set_payload(temp_file.read())
        encoders.encode_base64(part)
        part.add_header('Content-Disposition',
                        'attachment; filename={}'.format(Path(str(filename)).name))
        msg.attach(part)
    msg.attach(MIMEText(message))

    smtp = smtplib.SMTP(server, port)
    if use_tls:
        smtp.starttls()
    try:
        smtp.login(username, password)
    except Exception as e:
        logging.error("Error while logging into mail server: " + str(e))
    try:
        smtp.sendmail(send_from, send_to, msg.as_string())
        smtp.quit()
        logging.info("Mail sent successfully at " + formatdate(localtime=True))
    except Exception as e:
        logging.error("Error while sending mail: " + str(e))
        smtp.quit()
