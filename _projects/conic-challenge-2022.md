---
date: 2022-04-06
published: true
title: "CoNiC Challenge 2022"
description: "CoNiC: Colon Nuclei Identification and Counting Challenge 2022"
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
  Together with [Lorenz Rumberger](https://github.com/JLrumberger) and [Peter Hirsch](https://github.com/abred), in 2022 we took part in the CoNiC: Colon Nuclei Identification and Counting Challenge where we placed second. Our work led to a method short paper published at ISBI 2022.

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
      In that paper, we present a deep learning approach for panoptic segmentation of nuclei in H&E-stained histopathology images, developed for the CoNIC Challenge. The challenge involves highly imbalanced data, with some cell types being extremely rare. To address this, we propose a weighted loss function and integrate it with a state-of-the-art nuclei instance segmentation model in a Hovernet-like architecture. Key innovations include importance sampling to prioritize rare classes and a weighted focal loss to handle pixel-level class imbalance. We also use a three-label model for instance segmentation, predicting nucleus interiors, boundaries, and background, along with an auxiliary task of regressing nucleus center-point vectors.

  - section_layout: 1col
    images:
      - caption:
        description: 'Prediction results'
        url: '/projects/ai-for-climate-2021/mean_pred_2020.jpg'
        width:
        height:
  - section_layout: text
    content: |
      We evaluate our method on the Lizard dataset, which has significant class imbalance. Our experiments show that importance sampling and loss weighting improve performance, especially for rare cell types. The model achieves strong results on both nuclear segmentation and classification tasks, with the EfficientNet-L2 backbone outperforming smaller architectures.

      Overall, our approach provides a promising foundation for large-scale investigations into cellular composition and tumor microenvironments.

      The open access pre-print can be found on [arxiv](https://arxiv.org/pdf/2203.11692).
---






