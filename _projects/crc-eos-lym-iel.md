---
date: 2025-06-05
published: true
title: "Eosinophils in Colorectal Cancer"
description: "Deep learning-based quantification of eosinophils and lymphocytes shows complementary prognostic effects in colorectal cancer patients"
categories: Deep Learning, Computational Pathology
disciplines: Deep Learning, Biomarker development, Clinical statistics, Image Analysis
media: Document
ownership: University of Bern
client:
time_period: 2025
thumbnail: "/projects/crc-eos-lym-iel/thumbnail.jpg"

website:
  button_text: Paper
  url: https://www.nature.com/articles/s41698-025-00955-0
  

intro: |
  Eosinophils are important components of the innate immune response and are prevalent in the respiratory and the digestive system. They are associated with a variety of diseases, but have been mostly investigated in the context of allergies, asthma and inflammatory diseases. But there is some evidence, that they also play a role in colorectal cancer and could either directly attack cancer cells or recruit cytotoxic t-cells for an anti-tumor response. In this paper, [published in npj Precision Oncology](https://www.nature.com/articles/s41698-025-00955-0), we looked eosinophils in the colorectal cancer immune response by automatically quantifying them with deep learning across a large set of cohorts. Figures and Images in the following text are taken from the original manuscript.

content_layout:
  - section_layout: 1col-narrow
    images:
      - caption:
        description: 'Workflow'
        url: '/projects/crc-eos-lym-iel/figure_6_workflow.jpg'
        width:
        height:

  - section_layout: text
    content: |
      For this project, we collected H&E-stained WSI from four different cohorts, applied a tissue type segmentation and a nuclei segmentation model and then combined them to extract immune cells close to tumor cells in either the tumor front or tumor center.
      Using an automatic tumor front estimation method, we could reliably identify the relevant zones without manual annotations and our subsequent analysis also showed that the tumor front is particularly important for patient survival.

  - section_layout: 2col-narrow
    images:
      - caption:
        description: 'Initial and qualitative results'
        url: '/projects/crc-eos-lym-iel/figure_1_descriptive.jpg'
        border: light
        width:
        height:
      - caption:
        description: 'Univariate survival analysis'
        url: '/projects/crc-eos-lym-iel/figure_4_univariate_survival.jpg'
        width:
        height:

  - section_layout: text
    content: |
      In this work, we could show that eosinophils in the tumor front are an independent prognostic factor and have added prognostic value particularly also when including intraepithelial lymphocytes, another commonly used prognostic immune marker in multivariate survival analysis. Interestingly, eosinophils are also not driven by a specific molecular subtype (though some correlation with MSI exists), so the molecular reason they move into the tumor microenvironment are still unknown. 

  - section_layout: 1col-narrow
    images:
      - caption:
        description: 'Multivariate survival analysis'
        url: '/projects/crc-eos-lym-iel/figure_5_multivariate_survival.jpg'
        width:
        height:
--- 