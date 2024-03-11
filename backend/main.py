import json
import logging
from flask import Flask, render_template, request, make_response, redirect, send_from_directory
import sendMail
import getConfig

# create flask app
app = Flask(__name__, static_folder='../frontend/dist/assets', template_folder='../frontend/dist')
_global_request = "No request yet"


@app.route('/')
def index():
    return send_from_directory(app.template_folder, 'index.html')


@app.route('/api/v1/post_form', methods=["POST"])  # #Datum; Rechnungsnummer; Name; Liste von Artikeln (
# Artikelnummer	Beschreibung	Verwendung	Kostenstelle	Preis (€))
def post_form():
    if request.method == "POST" and '/' in request.referrer:
        logging.debug("POST request from root")
        sendMail.send_mail(getConfig.get_config("mail_sender"), getConfig.get_config("mail_recipient"), "Exported "
                                                                                                        "List",
                           "Hey Kassierer, ein neuer Ausgabenbeleg ist eingegangen!", None, getConfig.get_config(
                "mail_server"), getConfig.get_config("mail_port"), getConfig.get_config("mail_username"),
                           getConfig.get_config("mail_password"), getConfig.get_config("mail_tls"))
    redirect("/", code=302)


@app.route('/api/v1/test', methods=["POST"])
def test():
    if request.method == "POST":
        logging.debug("POST request from root")
        rq = request.json
        global _global_request
        _global_request = rq
        return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}
    redirect("/", code=302)


@app.route('/api/v1/test_with_mail', methods=["POST"])
def test():
    if request.method == "POST":
        logging.debug("POST request from root")
        rq = request.json
        global _global_request
        _global_request = rq
        sendMail.send_mail(getConfig.get_config("mail_sender"), getConfig.get_config("mail_recipient"), "**** TEST "
                                                                                                        "Neuer"
                                                                                                        "Ausgabenbeleg "
                                                                                                        "TEST ****",
                           "Hey Admin! Dies ist ein Test!", None, getConfig.get_config(
                "mail_server"), getConfig.get_config("mail_port"), getConfig.get_config("mail_username"),
                           getConfig.get_config("mail_password"), getConfig.get_config("mail_tls"))
        return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}
    redirect("/", code=302)


@app.route('/test')
def testreturn():
    global _global_request
    return _global_request


if __name__ == '__main__':
    logging.debug("Starting app")
    app.run(debug=True, host="0.0.0.0", port="8080")
