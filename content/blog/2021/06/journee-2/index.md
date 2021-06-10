---
title: "Journee 2"
date: 2021-06-09T07:21:14+02:00
draft: true
description: ""
summary: ""
ReadingTime: 5
progress: 1
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


