/* eslint-disable */

import URL_CSS from '../config/index';

(function (window) {
 
  function EmailsInput(nodes) {
    EmailsInput.render(nodes);
  }

  EmailsInput.addStyle = function(parent) {
    var styleTag = document.createElement('style');
    var url = '@import "' + URL_CSS.style + '"';
    styleTag.textContent = url;
    parent.appendChild(styleTag);
  }

  EmailsInput.checkEmail = function(email) {
    var self = this;
    var regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return regex.test(email);
  }

  EmailsInput.createElementEmail = function(value) {
    const pill = document.createElement('div');
    pill.className = 'pill';
    const a = document.createElement('a');
    a.className = 'close';
    const span = document.createElement('span');
    span.innerText = value;
    a.appendChild(span);
    a.addEventListener('click', event => this.removePill(event));
    pill.appendChild(a);

    if (value !== 'invalid.email') pill.classList.add('valid');

    if (value === 'invalid.email') pill.classList.add('invalid');

    return pill;
  }

  EmailsInput.removePill = function(event) {
    const self = this;
    const { target } = event;
    const { tagName } = event.target;
    if (tagName === 'SPAN') target.parentElement.parentNode.remove();

    if (tagName === 'A') target.parentElement.remove();
  }

  EmailsInput.addEmail = function(event) {
    const listEmails = [];
    const container = event.target.parentElement.parentElement;
    const content = container.getElementsByClassName('content')[0];
    const emails = content.getElementsByClassName('multiple-emails')[0];
    const pills = emails.getElementsByClassName('pill');
    const input = emails.getElementsByTagName('input')[0];
    const lengthPills = pills.length;
    for (let i = 0; i < lengthPills; i++) {
      const text = pills[i].textContent;
      if (text && text !== 'invalid.email') listEmails.push(pills[i]);
    }
    const indexRandom = Math.floor(Math.random() * listEmails.length);
    if (listEmails[indexRandom]) {
      const newEmail = listEmails[indexRandom].cloneNode(true);
      newEmail.getElementsByTagName('a')[0].addEventListener('click', e => this.removePill(e));
      const element = pills[pills.length - 1];
      element.classList.add('random');
      element.after(newEmail);
      input.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
    }
  }

  EmailsInput.getEmailsCount = function(event) {
    const self = this;
    const container = event.target.parentElement.parentElement;
    const content = container.getElementsByClassName('content')[0];
    const action = container.getElementsByClassName('action')[0];
    const emails = content.getElementsByClassName('multiple-emails')[0];
    const pillsValids = emails.getElementsByClassName('pill valid');

    const isExistCounter = action.getElementsByClassName('counter')[0];
    if (isExistCounter) {
      isExistCounter.innerText = `Valid emails count : ${pillsValids.length}`;
    } else {
      const counter = document.createElement('div');
      counter.className = 'counter';
      counter.innerText = `Valid emails count : ${pillsValids.length}`;
      action.appendChild(counter);
    }
  }

  EmailsInput.addEmailsFormatted = function(values,multipleEmails) {
    const emails = values.split(',').filter(email => email);
    const lengthEmails = emails.length;
    const element = multipleEmails.getElementsByTagName('input')[0];
    for (let i = 0; i < lengthEmails; i++) {
      const emailText = emails[i].trim().toLowerCase();
      if (this.checkEmail(emailText)) {
        element.before(this.createElementEmail(emailText));
        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
      } else {
        element.before(this.createElementEmail('invalid.email'));
        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
      }
    }
  }

  EmailsInput.addEventsInput = function(input,multipleEmails) {
    input.addEventListener('keyup', (event) => {
      event.preventDefault();
      const { value } = event.target;
      if (value) {
        if (event.keyCode === 13) {
          this.addEmailsFormatted(value, multipleEmails);
          event.target.value = '';
        }
        if (event.keyCode === 91) {
          this.addEmailsFormatted(value, multipleEmails);
          event.target.value = '';
        }
        if (event.keyCode === 188) {
          this.addEmailsFormatted(value, multipleEmails);
          event.target.value = '';
        }
      }
    });

    input.addEventListener('blur', (event) => {
      event.preventDefault();
      const { value } = event.target;
      if (value) {
        this.addEmailsFormatted(value, multipleEmails);
        event.target.value = '';
      }
    });
  }

  EmailsInput.render = function(nodes) {
    const div = document.createElement('div');
    const content = document.createElement('div');
    const action = document.createElement('div');
    const button = document.createElement('button');
    const paragraph = document.createElement('label');
    const input = document.createElement('input');
    const multipleEmails = document.createElement('div');
    multipleEmails.className = 'multiple-emails';
    input.setAttribute('type', 'email');
    input.setAttribute('id', 'emailinput');
    input.setAttribute('placeholder', 'add more people…');
    EmailsInput.addEventsInput(input, multipleEmails);
    action.className = 'action';
    content.className = 'content';
    paragraph.innerHTML = 'Share <span>Board name</span> with others';
    button.innerText = 'Add email';
    const buttonEmails = document.createElement('button');
    buttonEmails.innerText = 'Get emails count';
    buttonEmails.addEventListener('click', event => EmailsInput.getEmailsCount(event));
    button.addEventListener('click', event => EmailsInput.addEmail(event));
    content.appendChild(paragraph);
    multipleEmails.appendChild(input);
    content.appendChild(multipleEmails);
    action.appendChild(button);
    action.appendChild(buttonEmails);
    div.appendChild(content);
    div.appendChild(action);
    div.classList.add('emails-input');
    EmailsInput.addStyle(div);

    if(nodes && !nodes.length){
      nodes.appendChild(div);
    }
  }
  window.EmailsInput = EmailsInput;

}(window));