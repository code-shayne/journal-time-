CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE entries (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    emotion VARCHAR(255) NOT NULL,
    entry_title VARCHAR(255) NOT NULL,
    entry_body VARCHAR(255) NOT NULL,
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Function to generate a random salt
DELIMITER //
CREATE FUNCTION generate_salt(length INT) RETURNS VARCHAR(255)
BEGIN
    DECLARE characters VARCHAR(62) DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    DECLARE salt VARCHAR(255) DEFAULT '';
    DECLARE i INT DEFAULT 0;

    WHILE i < length DO
        SET salt = CONCAT(salt, SUBSTRING(characters, 1 + FLOOR(RAND() * 62), 1));
        SET i = i + 1;
    END WHILE;

    RETURN salt;
END //
DELIMITER ;

-- Example registration query
-- Replace 'input_username', 'input_email', and 'input_password' with actual user input
SET @salt = generate_salt(32);
INSERT INTO users (username, email, password_hash, salt, first_name, last_name)
VALUES ('input_username', 'input_email@example.com', SHA2(CONCAT('input_password', @salt), 256), @salt, 'Full Name');

INSERT INTO entries (user_id, emotion, entry_title, entry_body)
VALUES ('userid', 'emotion', 'entry_title', 'entry_body');