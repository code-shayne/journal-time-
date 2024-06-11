<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = mysqli_connect("localhost", "root", "Pineapple8656!", "journaltime");
  
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }

    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "INSERT INTO users (username, email, pass) VALUES ('$username', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
      echo "Data saved successfully!";
    } 
    else {
      echo "Error: " . mysqli_error($conn);
    }

    mysqli_close($conn);
    
    header("Location: login.html");
  }