import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
declare var $: any;

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent {
  ngOnInit(): void {
    const sendBtn = document.getElementById('btnSend');
    (function () {
      emailjs.init('r6yu_6-PRS-_rhjDy');
    })();

    function sendMail() {
      var params = {
        name: (<HTMLInputElement>document.getElementById('nameField'))?.value,
        email: (<HTMLInputElement>document.getElementById('email'))?.value,
        message: (<HTMLInputElement>document.getElementById('message'))?.value,
      };

      const serviceID = 'service_qbkklsn';
      const templateID = 'template_j5h0c4a';

      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          (<HTMLInputElement>document.getElementById('name')).value = '';
          (<HTMLInputElement>document.getElementById('email')).value = '';
          (<HTMLInputElement>document.getElementById('message')).value = '';
          alert('your message sent successfully');
        })
        .catch((err) => console.log(err));
    }

    sendBtn?.addEventListener('click', sendMail);
  }
}
