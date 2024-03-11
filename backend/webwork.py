import os
import shutil
from datetime import datetime
from werkzeug.utils import secure_filename

import sendMail
import getConfig


def test_with_mail(request):
    sendMail.send_mail(getConfig.get_config("mail_sender"), getConfig.get_config("mail_recipient").split(','),
                       "**** TEST "
                       "Neuer"
                       "Ausgabenbeleg "
                       "TEST ****",
                       "Hey Admin! Dies ist ein Test!", None, getConfig.get_config(
            "mail_server"), getConfig.get_config("mail_port"), getConfig.get_config("mail_username"),
                       getConfig.get_config("mail_password"), getConfig.get_config("mail_tls"))


def post_form(request):
    directory_path = 'temp/'
    # Optional: Speichern der Datei
    uploaded_files = request.files.getlist("files")  # Achten Sie auf den korrekten Namen des Feldes
    counter = 0
    for file in uploaded_files:
        filename = secure_filename(file.filename)
        file_path = os.path.join(directory_path, filename)
        file.save(file_path)
        counter += 1
    # Zugriff auf weitere Formulardaten
    date_str = request.form.get('date', 'N/A')
    date_obj = datetime.strptime(date_str, '%Y-%m-%d')  # assuming the date is in 'YYYY-MM-DD' format
    formatted_date = date_obj.strftime('%d.%m.%Y')  # format date to 'DD.MM.YYYY HH:MM'
    invoice_number = request.form.get('invoiceNumber', 'N/A')
    member_name = request.form.get('memberName', 'N/A')
    total = request.form.get('total', 'N/A')
    counter = str(counter)
    title = "Neuer Ausgabenbeleg " + invoice_number + " von " + member_name + " über " + total + "€"
    messagebody = "Hey Kassierer! \nEin neuer Ausgabenbeleg von " + member_name + " über " + total + " € ist am " + str(
        formatted_date) + " eingegangen! \n" + counter + (" Rechnungen wurden angehängt.\n \nMit freundlichen Grüßen\n"
                                                          "Robin und Jan")
    sendMail.send_mail(getConfig.get_config("mail_sender"), getConfig.get_config("mail_recipient").split(','), title,
                       messagebody,
                       uploaded_files, getConfig.get_config(
            "mail_server"), getConfig.get_config("mail_port"), getConfig.get_config("mail_username"),
                       getConfig.get_config("mail_password"), getConfig.get_config("mail_tls"))

    for filename in os.listdir(directory_path):
        file_path = os.path.join(directory_path, filename)
        try:
            if os.path.isfile(file_path):
                os.remove(file_path)  # remove the file
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)  # remove dir and all contains
        except Exception as e:
            print(f'Failed to delete {file_path}. Reason: {e}')
    return {
        'message': 'Daten erfolgreich empfangen',
        'date': formatted_date,
        'invoiceNumber': invoice_number,
        'memberName': member_name,
        'total': total,
        'fileName': str(uploaded_files)
    }, 200
