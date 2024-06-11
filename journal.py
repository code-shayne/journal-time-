from flask import Flask, request
import mysql.connector
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/entry', methods=["POST"])
def handle_entry():
    # Get the journal entry from the form data
    entry_body = request.form.get('entry')

    db = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="Pineapple8656!",
        database="journaltime1"
    )

    cursor = db.cursor()

    query = "INSERT INTO entries (entry_body) VALUES (%s)"
    cursor.execute(query, (entry_body,))

    db.commit()

    cursor.close()
    db.close()

    return 'Entry stored!'

@app.route('/signup', methods=["POST"])
def handle_signup():
    # Get the username, email, and password from the form data
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')

    db = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="Pineapple8656!",
        database="journaltime1"
    )

    cursor = db.cursor()

    query = "INSERT INTO users (username, email, pass) VALUES (%s, %s, %s)"
    cursor.execute(query, (username, email, password))

    db.commit()

    cursor.close()
    db.close()

    return 'Signup successful!'

@app.route('/login', methods=["POST"])
def check_login(username, password):
    db = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="Pineapple8656!",
        database="journaltime1"
    )

    cursor = db.cursor()

    query = "SELECT * FROM users WHERE username = %s AND pass = %s"
    cursor.execute(query, (username, password))

    result = cursor.fetchone()

    cursor.close()
    db.close()

    # If a result is found, the username and password are correct
    if result:
        return True
    else:
        return False

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)