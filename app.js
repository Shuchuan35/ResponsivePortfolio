const sendEmail = function (event) {
    event.preventDefault();

    const params = {
        from_name: $('#name').val().trim(),
        from_email: $('#email').val().trim(),
        subject: $('#subject').val().trim(),
        message: $('#message').val().trim()
    }

    emailjs.send("gmail", "formsubmit", params)
        .then(function (res) {
            $("#name").val('');
            $("#email").val('');
            $("#subject").val('');
            $("#message").val('');
            alert("Email Sent Successfully!");
            console.log("Success", res.status, res.text);
        },
            function (err) {
                alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                console.log("Error:", err);
            });
}


//==================================
// Event Listeners
//==================================

$('#submit').on('click', sendEmail);


