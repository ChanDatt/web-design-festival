const form = document.querySelector('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `First Name: ${firstName.value}<br> Last Name: ${lastName.value}<br> Moblie: ${mobile.value}<br> Email: ${email.value}<br> Message: ${message.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "2251012031dat@ou.edu.vn",
        Password : "00D6768CD499A9C998177BBB419CDEBDC0E6",
        To : '2251012031dat@ou.edu.vn',
        From : "2251012031dat@ou.edu.vn",
        Subject : "Message",
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Submitted successfully",
                    icon: "success"
                  });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});