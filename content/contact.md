---
title: "Contact"
date: 2020-03-18T10:57:42+01:00
layout: "contact"
disable_feed: true
heroimage: "/images/contact.jpg"
herotext: "Keep in touch !"
map: 4 rue de la folie, Rouen, France
---

<div class="columns is-multiline is-mobile">
    <div class="column">
<form name="contact" class="contact-form width-normal" action="/thank-you/" method="POST" netlify data-netlify="true" data-netlify-recaptcha="true">
    <input type="hidden" name="form-name" value="contact" />
    <!-- Text input-->
      <div class="field">
        <div class="control mb-3 has-icons-left">
          <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
          <input class="required input" type="text" placeholder="Nom" name="NAME" id="contact-form-name">
        </div>
        <div class="control mb-3 has-icons-left">
          <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
          <input class="required email input" type="email" placeholder="Email" name="EMAIL" id="contact-form-email">
        </div>
        <div class="control mb-3 has-icons-left">
          <span class="icon is-small is-left"><i class="fas fa-info"></i></span>
          <input id="contact-form-subject" name="Subject" type="text" placeholder="Subject" class="required input" required="" autocomplete="off">
        </div>
        <div class="control mb-3">
          <textarea id="contact-form-message" class="textarea" placeholder="Votre message pour me contacter"></textarea>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <div class="control mb-3">
          <input type="submit" value="Envoyer" name="envoyer" id="Form-submit" class="button is-danger">
        </div>
      </div>
</form>
</div>
</div>
