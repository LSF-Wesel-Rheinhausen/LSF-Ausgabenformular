# Verwenden Sie ein offizielles Python-Basisimage
FROM python:3.12

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# Kopieren der Abhängigkeiten-Datei
COPY requirements.txt .

# Installieren von Abhängigkeiten
RUN pip install --no-cache-dir -r requirements.txt

# Kopieren des Quellcodes in das Arbeitsverzeichnis im Container
COPY frontend/dist ./frontend/dist/

# Kopieren der Assets in das Arbeitsverzeichnis im Container
COPY backend ./backend/

# Umgebungsvariable setzen, um Flask im Produktionsmodus laufen zu lassen
ENV FLASK_ENV=production

# Port, auf dem die Anwendung läuft, freigeben
EXPOSE 80

# Befehl zum Starten der Flask-Anwendung
CMD ["python", "backend/main.py"]
