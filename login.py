import mysql.connector

def check_login(username, password):
    db = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="Pineapple8656!",
        database="journaltime!"
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