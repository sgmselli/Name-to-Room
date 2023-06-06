import emailjs from '@emailjs/browser';

function Email(name, email, number) {
    var templateParams = {
      to_name: name,
      from_name:'Name2Number',
      message: number,
      email: email,
    };
   
    emailjs.send('service_5s1zori', 'template_gh68qao', templateParams, 'FdieL1PFJD41MQU7J')
        .then(function() {
          document.getElementById('send').classList.remove('loading')
          document.getElementById('send').innerHTML = 'Sent!'
        }, function() {
          alert('Email failed to send, try again later.');
    });
  }

  export default Email;