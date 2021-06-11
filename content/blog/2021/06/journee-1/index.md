---
title: "test des images"
date: 2021-06-07
draft: true
description:
summary: "La date approche, j-7 avant le grand départ"
ReadingTime: 5
progress: 0
total: 42
voyages:
- Tour de France
categories:
- Préparatifs
resources:
- src: 'images/unnamed.jpg'
  title: "Yummy Cupcake"
  name: unnamed
- src: 'images/*.jpg'

---
Hey there! Please fill the files below and send them back to us.

{{< gallery class="columns is-multiline content-gallery" >}}
{{< imgproc name="unnamed" command="Resize" size="300x" column="is-half" title="Guidon Noir" link="guidon" >}}
{{< imgproc name="**/portrait.jpg" command="Resize" size="300x" column="is-half" title="Guidon Noir" link="portrait" >}}
{{< /gallery >}}
Thanks!

