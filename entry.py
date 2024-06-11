from flask import Flask, request
import mysql.connector

app = Flask(__name__)

@app.route('/entry.py', methods=['POST'])
def handle_entry():
    # Get the journal entry from the form data
    entry_body = request.form.get('entry')

    db = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="Pineapple8656!",
        database="journaltime"
    )

    cursor = db.cursor()

    query = "INSERT INTO journal_entries (entry_body) VALUES (%s)"
    cursor.execute(query, (entry_body,))

    db.commit()

    cursor.close()
    db.close()

    return 'Entry stored!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
