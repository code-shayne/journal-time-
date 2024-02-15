import hashlib

def signup():
    email = input("Enter email address: ")
    pwd = input("Enter password: ")
    conf_pwd = input("Confirm password: ")
    
    if conf_pwd == pwd:
        enc = conf_pwd.encode()
        hash1 = hashlib.md5(enc).hexdigest()
        
        with open("credentials.txt", "a") as f:
            f.write(email + "\n")
            f.write(hash1 + "\n")
        
        print("You have registered successfully!")
    else:
        print("Passwords do not match")

def login():
     email = input("Enter email: ")
     pwd = input("Enter password: ")
     auth = pwd.encode()
     auth_hash = hashlib.md5(auth).hexdigest()
     with open("credentials.txt", "r") as f:
         stored_email, stored_pwd = f.read().split("\n")
     f.close()
     if email == stored_email and auth_hash == stored_pwd:
        print("Login Successful")
     else: 
        print("Login Unsuccessful")

