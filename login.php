<?php
$conn = mysqli_connect('localhost', 'root', 'Pineapple8656!', 'journaltime1');
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$username_error = $pass_error = "";

if (isset($_POST['Log In'])) {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $pass = mysqli_real_escape_string($conn, $_POST['password']);

    $sql = "SELECT pass FROM users WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $stored_password = $row['password_hash'];

        if ($pass === $stored_password) {
            header("location: index.html");
        } else {
            $pass_error = "Invalid Password.";
        }
    } else {
        $username_error = "Invalid Username.";
    }
    
    header("Location: index.html");
}


mysqli_close($conn);