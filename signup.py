from flask import Flask, request
import mysql.connector

app = Flask(__name__)

@app.route('/signup.py', methods=['POST'])
def handle_signup():
    # Get the username, email, and password from the form data
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')

    db = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="Pineapple8656!",
        database="journaltime!"
    )

    cursor = db.cursor()

    query = "INSERT INTO users (username, email, pass) VALUES (%s, %s, %s)"
    cursor.execute(query, (username, email, password))

    db.commit()

    cursor.close()
    db.close()

    return 'Signup successful!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
