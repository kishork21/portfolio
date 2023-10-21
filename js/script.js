
let count = 0;
function sidebar1() {
    if (count > 0) {

        if (document.getElementById('links').style.display == 'none') {
            document.getElementById('links').style.display = 'block';
        } else {
            document.getElementById('links').style.display = 'none';
        }
    }
}

function sidebar2() {
    document.getElementById('links').style.display = 'block';
    count += 1;
}

let portfolio = {
    init: function () {
        portfolio.textAutoType();
        portfolio.bind();
    },
    bind: function () {
        $('body').on('click', '#formSubmit', portfolio.sendEmail)
    },
    textAutoType: function () {
        var typed = new Typed('.auto-type', {
            strings: ['Web Developer'],
            typeSpeed: 200,
            backSpeed: 50,
            loop: true,
        })
    },
    sendEmail: function () {
        Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'mewadakunal2002@gmail.com',
            Password: '1A8BAE52111655EE76B88A8FE2F35238F80D',
            To: 'kishork212002@gmail.com',
            From: 'mewadakunal2002@gmail.com',
            Subject: 'From unknown user',
            Body: {
                name: document.getElementById('name').value,
                number: document.getElementById('number').value,
                email: document.getElementById('email').value,
                msg: document.getElementById('msg').value
            }
        }).then(
            message => {
                if (message === 'OK') {
                    alert('Details sent successfully');
                    $('body #contact-form input,#contact-form textarea').val('')
                }
            }
        )
    }
}
portfolio.init()