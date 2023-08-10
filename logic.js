function sendEmail()
{
    Email.send({
        Host: "smtp.elasticemail.com",
        Username : "sanjayr112018@gmail.com",
        Password : "38DACF91DD6A5DECBF1D98C134B88D1298A8",
        To : 'sanjayr112018@gmail.com',
        From : "sanjayr112018@gmail.com",
        Subject : "TestMail",
        Body : "tested ",
    }).then(
		message => alert(message)
	);
}
