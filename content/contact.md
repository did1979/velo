---
title: "Contact"
date: 2020-03-18T10:57:42+01:00
layout: "contact"
disable_feed: true
heroimage: "/images/contact.jpg"
herotext: "Keep in touch !"
map: 4 rue de la folie, Rouen, France
buttons:
- name: Téléphone
  icon: fas fa-phone
  href: "tel:55555555"
- name: Formulaire de contact
  icon: fas fa-envelope
  id: open-modal
form: "https://forms.office.com/Pages/ResponsePage.aspx?id=mvVhe4X4IEKgK4V51PL4v-8H4BRoO1pEsNnkzVJrZtdUMktRTDNPQTFVOEpIU0ZKVkVPME4xNElQVy4u"
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
    <div class="column"><form name="contact" method="POST" netlify>
  <p>
    <label>Votre nom: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Votre Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Envoyer</button>
  </p>
</form></div>
</div>




