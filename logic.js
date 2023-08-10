function sendEmail()
{
    Email.send({
        Host: "smtp.elasticemail.com",
        Username : "sanjayr112018@gmail.com",
        Password : "38DACF91DD6A5DECBF1D98C134B88D1298A8",
        To : 'sanjayr112018@gmail.com',
        From : "sanjayr112018@gmail.com",
        Subject : "Subscribed Mails-LycheeProjects",
        Body : document.getElementById("inputMail").value,
    }).then(
		message => alert(message)
	);
}


// Elastic mail is used for smtp server
//Settings--->
// SMTP->create smtp crendiatals -> put a mail id only -> get a password no need to include port in the code 
// Domains -> manage dmains -> i dont own domain (if you dont have domain for mail) -> verification 