<?php
$conn = mysqli_connect('localhost', 'root', 'Pineapple8656!', 'journaltime');
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $entry = $_POST['entry'];
}

$sql = "INSERT INTO entries (entry_body ) VALUES ('$entry')";
if (mysqli_query($conn, $sql)) {
    echo "Record inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);