---
date: 2024-06-06
published: true
title: "HoVer-NeXt"
description: "HoVer-NeXt: A Fast Nuclei Segmentation and Classification Pipeline for Next Generation Histopathology"
categories: Deep Learning, Computational Pathology
disciplines: Deep Learning, Nuclei Segmentation and Classification, Image Analysis
media: Document
ownership: University of Bern
client:
time_period: 2022-2024
thumbnail: "/projects/hover-next/b20145985dn_all.webp"

website:
  button_text: GitHub
  url: https://github.com/digitalpathologybern/hover_next_inference
intro: |
  As a continuation of the CoNIC challenge, I developed a fully end-to-end pipeline for nuclei segmentation and classification
  of hematoxylin and eosin-stained whole slide images. This work tackled several important challenges, including optimizing
  the slow challenge code for high throughput, transferring the tile-based model to whole slide inference, and adapting
  the existing dataset with an additional class: mitoses. 
  Find the full manuscript on [Openreview](https://openreview.net/pdf?id=3vmB43oqIO). All figures are taken from the manuscript.

content_layout:

  - section_layout: 1col-narrow
    images:
      - caption:
        description: 'Prediction results'
        url: '/projects/hover-next/model_overview_data.webp'
        width:
        height:

  - section_layout: text
    content: |
      I included a self-training routine to include mitosis as an additional class into the lizard dataset, while also creating a separate
      new dataset that is automatically labelled by the trained model on lizard, but contains pHH3 ground truth annotations for mitosis.

  - section_layout: 2col-narrow
    images:
      - caption:
        description: 'Seq-to-seq architecture'
        url: '/projects/hover-next/selftraining.webp'
        border: light
        width:
        height:
      - caption:
        description: 'Speed chart'
        url: '/projects/hover-next/speed_barchart.webp'
        width:
        height:

  - section_layout: text
    content: |
      The new pipeline was 5 times faster than the state-of-the-art, enabled to differentiation of mitoses and intraepithelial lymphocytes 
      and compared to transformer-based approaches, does not suffer from tile normalization artefacts. 

  - section_layout: 1col-narrow
    images:
      - caption:
        description: 'Prediction results'
        url: '/projects/hover-next/comp_hn_cellvit.webp'
        width:
        height:
  
---
