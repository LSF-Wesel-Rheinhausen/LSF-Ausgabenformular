import json
import logging
import os
import sys
from datetime import date
from html import escape
from flask import Flask, render_template, request, redirect, url_for, make_response

# create flask app
app = Flask(__name__, static_folder='static', template_folder='templates')


@app.route('/')
def index():
    resp = make_response(render_template("index.html"))
    return resp


@app.route('/api/v1/post_form', methods=["POST"]) ##Datum; Rechnungsnummer; Name; Liste von Artikeln (Artikelnummer	Beschreibung	Verwendung	Kostenstelle	Preis (€))
def post_form():
    date = request.form["Datum"]
    bill_nr = request.form["Rechnungsnummer"]
    name = request.form["name"]
    resp = make_response(render_template("index.html"))
    return resp


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port="8080")
