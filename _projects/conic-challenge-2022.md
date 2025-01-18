---
date: 2022-04-06
published: true
title: "CoNiC Challenge 2022"
description: "Neural Turing Machine for data efficient landmark localization"
categories: Thesis, Deep Learning
disciplines: Deep Learning, Keypoint Detection, Image Analysis
media: Document
ownership: Personal
client:
time_period: 2022
thumbnail: "/projects/conic-challenge-2022/banner.jpeg"

website:
  button_text: GitHub
  url: https://github.com/eliasbaumann/LandmarkLocalizationNTM
intro: |
  In my masters thesis, I worked on data efficient landmark localization by
  building on the [neural turing machine](https://arxiv.org/pdf/1410.5401) memory component as an extended
  attention mechanism. During inference, the model would successively predict
  landmarks and utilize the previously predicted landmarks as help for the next
  prediction.

content_layout:
  - section_layout: 2col
    images:
      - caption:
        description: 'Seq-to-seq architecture'
        url: '/projects/ai-for-climate-2021/seqseqlstm.jpg'
        border: light
        width:
        height:
      - caption:
        description: 'Web app example'
        url: '/projects/ai-for-climate-2021/snow_cover_screenshot.jpg'
        width:
        height:

  - section_layout: text
    content: |
      Our Team, Snow Clue, placed first with an innovative approach of using
      convolutional sequence-to-sequence LSTMs for short to intermediate
      snow cover forecasting and took the first place in that category.
      I developed the entire deep learning pipeline, including data preparation,
      validation and optimization. My team developed a web application to 
      visualize results and make them easily accessible.

  - section_layout: 1col
    images:
      - caption:
        description: 'Prediction results'
        url: '/projects/ai-for-climate-2021/mean_pred_2020.jpg'
        width:
        height:
  - section_layout: text
    content: |
      For more information, consider reading the [full thesis](https://github.com/eliasbaumann/LandmarkLocalizationNTM/blob/master/Thesis_Elias_Baumann.pdf).


---
