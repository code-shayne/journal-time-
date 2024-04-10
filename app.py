# flask- to be used to run local server for database testing purposes
from flask import Flask, request
import sqlite3

app = Flask(__name__)

@app.route('/', methods=['POST'])
def signup():
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']

# mydatabase.db is a placeholder - we do not have a sql server set up yet, jsut formats for tables
    conn = sqlite3.connect('mydatabase.db')
    c = conn.cursor()

    c.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
              (username, email, password))

    conn.commit()
    conn.close()

    return "Success!"

if __name__ == '__main__':
    app.run(debug=True)