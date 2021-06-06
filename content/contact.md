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
    <form name="contact" method="POST" netlify data-netlify-recaptcha="true">
    <div class="field">
      <div class="control mb-3 has-icons-left">
        <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
        <input class="required input" type="text" placeholder="Nom" name="NAME" id="mce-name">
      </div>
      <div class="control mb-3 has-icons-left">
        <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
        <input class="required email input" type="email" placeholder="Email" name="EMAIL" id="mce-EMAIL">
      </div>
      <div class="control mb-3">
        <textarea class="textarea" placeholder="Votre message pour me contacter"></textarea>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <div class="control mb-3">
    <input type="submit" value="Envoyer" name="envoyer" id="mc-embedded-subscribe"
                                class="button is-danger">
    </div>
    </div>
    </form>
    </div>
</div>




