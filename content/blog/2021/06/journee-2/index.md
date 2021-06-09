---
title: "Journee 2"
date: 2021-06-09T07:21:14+02:00
draft: false
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
{{< paragraph column="is-half" >}}
# C'est une belle colonne ma fois.
## Salut voici le paragraph à droite de l'image.

Salut voici le paragraph à droite de l'image.
Salut voici le paragraph à droite de l'image.
Salut voici le paragraph à droite de l'image.
{{< /paragraph >}}
{{< paragraph column="is-half" >}}

## Titre 2
### Titre 3
#### Titre 4

Salut voici le paragraph à droite de l'image.
Salut voici le paragraph à droite de l'image.
Salut voici le paragraph à droite de l'image.
{{< /paragraph >}}
{{< gallery class="columns is-multiline content-gallery" >}}
{{< imgproc name="**/portrait-3.jpg" command="Resize" size="300x" column="is-half" title="Portrait 1" link="portrait-1" >}}
{{< imgproc name="**/portrait.jpg" command="Resize" size="300x" column="is-half" title="Portrait 2" link="portrait-2" >}}
{{< /gallery >}}
Thanks!


