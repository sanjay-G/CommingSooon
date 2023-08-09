function sendEmail()
{
    Email.send({
        Host: "smtp.gmail.com",
        Username : "sanjayr112018@gmail.com",
        Password : "Sanjayjaisridhar.1@",
        To : 'sanjayr112018@gmail.com',
        From : "sanjayr112018@gmail.com",
        Subject : "TestMail",
        Body : "tested ",
    }).then(
		message => alert("Mail Sent Successfully")
	);
}
