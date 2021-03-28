---
title: Guidon
date: 2020-03-18T12:43:08.000Z
draft: false
description: Un beau guidon de course !
ReadingTime: 5
images:
  - /images/blog/2019/03/guidon.jpg
categories:
  - Montage
---
# bon exemple de gestion avec paragraphe.
<div class="columns is-multiline" >
{{< img column="is-half" title="Guidon Noir" src="/images/blog/2019/03/guidon.jpg" ink="guidon">}}
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
{{< img column="is-half" title="Guidon Noir" src="/images/blog/2019/03/guidon.jpg" ink="guidon">}}
</div>

## Galerie d'images

{{< gallery class="columns is-multiline content-gallery" >}}
{{< img src="/images/2.jpg" column="is-one-third" link="image1">}}
{{< img src="/images/3.jpg" column="is-one-third" link="image2">}}
{{< img src="/images/4.jpg" column="is-one-third" link="image3">}}
{{< /gallery >}}

<div class="columns is-mobile">
  <div class="column is-three-fifths is-offset-one-fifth">
  <p class="title">Image 3/5 centrée</p>
  {{< img src="/images/5.jpg" link="image5">}}
  </div>
</div>


<div class="columns">
  <div class="column is-narrow">
    <div class="box" style="width: 200px;">
      <p class="title is-5">Narrow column</p>
      <p class="subtitle">This column is only 200px wide.</p>
    </div>
  </div>
  <div class="column">
    <div class="box">
      <p class="title is-5">Flexible column</p>
      <p class="subtitle">This column will take up the remaining space available.</p>
      {{< img src="/images/4.jpg" column="is-one-third" link="toto">}}
    </div>
  </div>
</div>

