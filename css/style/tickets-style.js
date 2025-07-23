const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close')

        function showBuyTickets(){
            modal.classList.add('open')
        }

        function hideBuyTickets(){
            modal.classList.remove('open')
        }

        for(const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        }

        modalClose.addEventListener('click', hideBuyTickets)

        modal.addEventListener('click', hideBuyTickets)

        modalContainer.addEventListener('click', function (event){
            event.stopPropagation()
        })

const form = document.querySelector('form');
const city = document.getElementsByName('city');
const kit = document.getElementsByName('kit');
const quantity = document.getElementById('quantity');
const email = document.getElementById('email');

function sendEmail() {
    const bodyMessage = `City: ${city.value}<br> Kit: ${kit.value}<br> Quantity: ${quantity.value}<br> Email: ${email.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "2251012031dat@ou.edu.vn",
        Password : "00D6768CD499A9C998177BBB419CDEBDC0E6",
        To : '2251012031dat@ou.edu.vn',
        From : "2251012031dat@ou.edu.vn",
        Subject : "REQUEST TO BUY KIT",
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Request to kit successfully! We will send you a transaction information later.",
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