import json
import logging
from flask import Flask, render_template, request, make_response, redirect, send_from_directory

# create flask app
app = Flask(__name__, static_folder='../frontend/dist/assets', template_folder='../frontend/dist')


@app.route('/')
def index():
    return send_from_directory(app.template_folder, 'index.html')


@app.route('/api/v1/post_form', methods=["POST"])  # #Datum; Rechnungsnummer; Name; Liste von Artikeln (
# Artikelnummer	Beschreibung	Verwendung	Kostenstelle	Preis (€))
def post_form():
    if request.method == "POST" and '/' in request.referrer:
        logging.debug("POST request from root")
    redirect("/")

@app.route('/api/v1/test', methods=["POST"])
def test():
    if request.method == "POST":
        logging.debug("POST request from root")
        rq = request.json
        print(rq)
    redirect("/")

if __name__ == '__main__':
    logging.debug("Starting app")
    app.run(debug=True, host="0.0.0.0", port="8080")
