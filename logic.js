function sendEmail()
{
    Email.send({
        Host: "smtp.gmail.com",
        Username : "sanjay.g@forgeforward.in",
        Password : "Forge@123",
        To : 'sanjayr112018@gmail.com',
        From : "sanjay.g@forgeforward.in",
        Subject : "TestMail",
        Body : "tested ",
    }).then(
		message => alert("Mail Sent Successfully")
	);
}