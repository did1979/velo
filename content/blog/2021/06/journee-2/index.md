---
title: "Journee 2"
date: 2021-06-16
draft: true
description: "Honfleur - Caen"
summary: "une belle journée pour le vélo"
ReadingTime: 5
progress: 2
total: 44
resources:
- src: 'images/entete.jpg'
  title: "entete"
  name: entete
- src: 'images/*.jpg'
voyages:
- Tour de France

---
Hey there! Please fill the files below and send them back to us.
# bon exemple de gestion avec paragraphe.

<div class="columns is-multiline" >
{{< imgproc name="**/unnamed.jpg" command="Resize" size="300x" column="is-half" title="Vacances" link="unnamed" >}}
{{< paragraph column="is-half" >}}
## Salut voici le paragraph à droite de l'image.
Salut voici le paragraph à droite de l'image.
Salut voici le paragraph à droite de l'image.
Salut voici le paragraph à droite de l'image.
{{< /paragraph >}}

</div>

{{< gallery class="columns is-multiline content-gallery" >}}
{{< imgproc name="**/portrait-3.jpg" command="Resize" size="300x" column="is-half" title="Portrait 1" link="portrait-1" >}}
{{< imgproc name="**/portrait.jpg" command="Resize" size="300x" column="is-half" title="Portrait 2" link="portrait-2" >}}
{{< /gallery >}}
Thanks!


