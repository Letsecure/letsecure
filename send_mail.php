<?php


#################### configure the following parameters ###################################
//Add your email here
$EmailTo = 'youremail@.com';
$Subject = 'New Message Received';

$successMsg = 'Thank you, We received your message!';


############################################################################################

header('Content-Type: application/json');

$errorMSG = '';


// NAME
if (empty($_POST['name'])) {
    $errorMSG = 'Name is required ';
    $name = '';
} else {
    $name = $_POST['name'];
}

// EMAIL
if (empty($_POST['email'])) {
    $errorMSG .= 'Email is required ';
    $email = '';
} else {
    $email = $_POST['email'];
}

// MSG SUBJECT
if (empty($_POST['subject'])) {
    $errorMSG .= 'Subject is required ';
    $msg_subject = '';
} else {
    $msg_subject = $_POST['subject'];
}


// MESSAGE
if (empty($_POST['message'])) {
    $errorMSG .= 'Message is required ';
    $message = '';
} else {
    $message = $_POST['message'];
}


if ($errorMSG !== '') {
    http_response_code(403);
    echo json_encode(['error' => $errorMSG]);
    exit;
}


// prepare email body text
$Body = '';
$Body .= 'Name: ';
$Body .= $name;
$Body .= "\n";
$Body .= 'Email: ';
$Body .= $email;
$Body .= "\n";
$Body .= 'Subject: ';
$Body .= $msg_subject;
$Body .= "\n";
$Body .= 'Message: ';
$Body .= $message;
$Body .= "\n";


// send email
$success = mail($EmailTo, $Subject, $Body, 'From:' . $email);


//Set Location

if ($success) {
    echo json_encode(['success' => $successMsg]);

} else {
    http_response_code(403);
    echo json_encode(['error' => 'something went wrong']);
}
