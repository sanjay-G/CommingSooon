function sendEmail()
{
    Email.send({
        Host: "smtp.gmail.com",
        Username : "lycheeprojects.in@gmail.com",
        Password : "Lycheeprojects.1@",
        To : 'sanjayr112018@gmail.com',
        From : "lycheeprojects.in@gmail.com",
        Subject : "TestMail",
        Body : "tested ",
    }).then(
		message => alert(message)
	);
}