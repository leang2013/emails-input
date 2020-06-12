class EmailsInput extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.text = this.getAttribute('text');
    this.size = this.getAttribute('font-size');
    this.render();
  }

  addStyle() {
    const styleTag = document.createElement('style');
    styleTag.textContent = '@import "http://emails-input.now.sh/style.css"';
    this.shadowRoot.appendChild(styleTag);
  }


  checkEmail(email) {
    const self = this;
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return regex.test(email);
  }

  createElementEmail(value) {
    const pill = document.createElement('div');
    pill.className = 'pill';
    const a = document.createElement('a');
    a.className = 'close';
    const span = document.createElement('span');
    span.innerText = value;
    a.appendChild(span);
    a.addEventListener('click', this.removePill);
    pill.appendChild(a);

    if (value !== 'invalid.email') pill.classList.add('valid');

    if (value === 'invalid.email') pill.classList.add('invalid');

    return pill;
  }

  removePill(event) {
    const self = this;
    const { target } = event;
    const { tagName } = event.target;

    if (tagName === 'SPAN') target.parentElement.parentNode.remove();

    if (tagName === 'A') target.parentElement.remove();
  }

  addEmail(event) {
    const self = this;
    const listEmails = [];
    const container = event.target.parentElement.parentElement;
    const content = container.getElementsByClassName('content')[0];
    const emails = content.getElementsByClassName('multipleEmails')[0];
    const pills = emails.getElementsByClassName('pill');
    for (const pill of pills) {
      const text = pill.textContent;
      if (text && text !== 'invalid.email') listEmails.push(pill);
    }
    const indexRandom = Math.floor(Math.random() * listEmails.length);
    const newEmail = listEmails[indexRandom].cloneNode(true);
    const element = pills[pills.length - 1];
    element.classList.add('random');
    element.after(newEmail);
  }

  getEmailsCount(event) {
    const self = this;
    const container = event.target.parentElement.parentElement;
    const content = container.getElementsByClassName('content')[0];
    const action = container.getElementsByClassName('action')[0];
    const emails = content.getElementsByClassName('multipleEmails')[0];
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

  addEmailsFormatted(values, multipleEmails) {
    const emails = values.split(',');
    const element = multipleEmails.getElementsByTagName('input')[0];
    for (const email in emails) {
      const emailText = emails[email].trim().toLowerCase();
      if (this.checkEmail(emailText)) {
        element.before(this.createElementEmail(emailText));
      } else {
        element.before(this.createElementEmail('invalid.email'));
      }
    }
  }

  addEventsInput(input, multipleEmails) {
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

  render() {
    const div = document.createElement('div');
    const content = document.createElement('div');
    const action = document.createElement('div');
    const button = document.createElement('button');
    const paragraph = document.createElement('label');
    const input = document.createElement('input');
    const multipleEmails = document.createElement('div');
    multipleEmails.className = 'multipleEmails';
    input.setAttribute('type', 'email');
    input.setAttribute('id', 'emailinput');
    input.setAttribute('placeholder', 'add more people…');
    this.addEventsInput(input, multipleEmails);
    action.className = 'action';
    content.className = 'content';
    paragraph.innerHTML = 'Share <b>Board name</b> with others';
    button.innerText = 'Add email';
    const buttonEmails = document.createElement('button');
    buttonEmails.innerText = 'Get emails count';
    buttonEmails.addEventListener('click', this.getEmailsCount);
    button.addEventListener('click', this.addEmail);
    content.appendChild(paragraph);
    multipleEmails.appendChild(input);
    content.appendChild(multipleEmails);
    action.appendChild(button);
    action.appendChild(buttonEmails);
    div.appendChild(content);
    div.appendChild(action);
    div.classList.add('EmailsInput');
    this.shadowRoot.appendChild(div);
    this.addStyle();
  }
}

try {
  customElements.define('emails-input', EmailsInput);
} catch (err) {
  const h3 = document.createElement('h3');
  h3.innerHTML = "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!";
  document.body.appendChild(h3);
}

export default EmailsInput;
