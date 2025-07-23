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
        const fullname = document.getElementById('name');
        const email = document.getElementById('email');
        const file = document.getElementById('myfile')
        
        function sendEmail() {
            const bodyMessage = `Name: ${fullname.value}<br> Email: ${email.value}<br> File: ${myfile.value}`;
        
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "2251012031dat@ou.edu.vn",
                Password : "00D6768CD499A9C998177BBB419CDEBDC0E6",
                To : '2251012031dat@ou.edu.vn',
                From : "2251012031dat@ou.edu.vn",
                Subject : "Image",
                Body : bodyMessage
            }).then(
              message => {
                if(message == "OK"){
                    Swal.fire({
                        title: "Success!",
                        text: "Thank you for being part of THE COLOR RUN!",
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

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display="flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display="none";
}