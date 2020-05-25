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
        <h2 class="title is-4">Opening hours</h2>
        <p>Mon-Fri: 10:00-20:00<br>
        Sat: 10:00-18:00<br>
        Sun: closed</p>
    </div>
    <div class="column">
        <h2 class="title is-4">Address</h2>
        <p>My Company <br>Töölönlahdenkatu 4 <br>00100 Helsinki<br>Finland</p>
    </div>
    <div class="column">
    <form name="contact" method="POST" netlify data-netlify-recaptcha="true">
  <p>
    <label>Votre nom: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Votre Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Envoyer</button>
  </p>
</form></div>
</div>




