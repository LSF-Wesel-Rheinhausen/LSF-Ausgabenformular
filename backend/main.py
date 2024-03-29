import json
import logging
from flask import Flask, render_template, request, make_response, redirect, send_from_directory
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer
import webwork
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
        webwork.post_form(request)
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
def test_with_mail():
    if request.method == "POST":
        logging.debug("POST request from root")
        return webwork.post_form(request)
    redirect("/", code=302)


@app.route('/test')
def testreturn():
    global _global_request
    return _global_request


if __name__ == '__main__':
    logging.debug("Starting app")
    if getConfig.get_config("environment") == "development":
        logging.basicConfig(level=logging.DEBUG)
        app.run(debug=True, host="0.0.0.0", port="8080")
    else:
        logging.basicConfig(level=logging.INFO)
        http_server = WSGIServer(('0.0.0.0', 8080), app)
        http_server.serve_forever() # start the server
