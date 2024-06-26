CREATE DATABASE JournalTime;
USE JournalTime;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS entries;
CREATE TABLE entries (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    entry_body VARCHAR(255) NOT NULL,
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS rewards;
CREATE TABLE rewards (
	username VARCHAR(255) NOT NULL UNIQUE,
    crystals INT,
    crystals_earned INT,
    crystals_spent INT,
    rose_theme_owned BOOLEAN,
    beach_theme_owned BOOLEAN,
    wild_west_theme_owned BOOLEAN,
    slime_theme_owned BOOLEAN,
    forest_theme_owned BOOLEAN,
    pizza_theme_owned BOOLEAN,
    sunset_theme_owned BOOLEAN,
    christmas_theme_owned BOOLEAN,
    would_you_rather_prompts_owned BOOLEAN,
    self_reflection_prompts_owned BOOLEAN,
    gratitude_prompts_owned BOOLEAN,
    grief_prompts_owned BOOLEAN
);

/* CREATE TABLE notifications (
	user_id INT,
    email VARCHAR(255) NOT NULL UNIQUE,
    notifs_on BOOLEAN
); */

-- Function to generate a random salt
/*DELIMITER //
CREATE FUNCTION generate_salt(length INT) RETURNS VARCHAR(255)
READS SQL DATA
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
DELIMITER ;*/

-- Example registration query
-- Replace 'input_username', 'input_email', and 'input_password' with actual user input

-- sample insert statements
-- INSERT INTO users (username, email, password_hash, salt, first_name, last_name)
-- VALUES ('username', 'email', 'password_hash', @salt, 'first_name', 'last_name');

-- INSERT INTO entries (emotion, entry_title, entry_body)
-- VALUES ('emotion', 'entry_title', 'entry_body');
