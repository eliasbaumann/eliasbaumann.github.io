---
date: 2025-06-20
published: true
title: "Aligning Computational Pathology with Clinical Practice"
description: "A systematic review of AI tools for pathology report elements in colorectal cancer"
categories: Computational Pathology, Systematic Review
disciplines: Systematic Review, Digital Pathology, Clinical Translation
media: Document
ownership: University of Bern
client:
time_period: 2024-2025
thumbnail: "/projects/crc-ai-review/thumbnail.webp"

website:
  button_text: Paper
  url: https://www.nature.com/articles/s41698-025-01119-w

intro: |
  Pathology reporting of colorectal cancer follows the International Collaboration on Cancer Reporting (ICCR) guidelines,
  which define a set of 25 report elements, such as tumor grade, stage, and microsatellite instability, to be assessed
  for diagnosis. To support pathologists in their daily diagnostic routine, numerous computational tools have been developed
  over the last ten years. Yet despite excellent sensitivity and clear advantages, including time savings and reduced
  inter-observer variability, many of these tools never reach clinical deployment. In this systematic review,
  [published in npj Precision Oncology](https://www.nature.com/articles/s41698-025-01119-w), we systematically map AI tools for CRC report elements to identify the critical
  challenges that stand between promising algorithms and real clinical use.

content_layout:
  - section_layout: 2col-narrow
    images:
      - caption: "Review workflow: systematic literature search across four databases, mapped against the 25 ICCR report elements, with meta- and element-wise analysis."
        description: 'Review methodology'
        url: '/projects/crc-ai-review/figure1.webp'
        border: light

  - section_layout: text
    content: |
      Following PRISMA guidelines, we screened 4,883 records from PubMed, IEEE Xplore, Web of Science, and Embase,
      ultimately including 66 studies that automatically assess ICCR report elements from H&E-stained histopathology data.

  - section_layout: text
    content: |
      The review reveals a strong imbalance. A handful of elements, most notably MMR/MSI status, histological grade,
      and pTNM staging, attract the majority of research attention, while many clinically required elements remain
      largely unaddressed. Publication activity has grown sharply since 2021, but transparency has not kept pace:
      for most publications, neither data, code, nor model weights are publicly available.

  - section_layout: 1col-narrow
    images:
      - caption: "Coverage of ICCR report elements across the included studies (A), publication timeline (B), and availability of data, code, and weights (C)."
        description: 'Element coverage and reproducibility'
        url: '/projects/crc-ai-review/figure3.webp'
        border: light

  - section_layout: text
    content: |
      Based on element-wise methodological and translational analysis, we formulate concrete gaps and recommendations
      covering dataset standards, validation requirements, and regulatory considerations for developing AI tools
      that can reliably and automatically assess ICCR elements and ultimately reach clinical deployment.

  - section_layout: 1col-narrow
    images:
      - caption: "Element-wise analysis of studies addressing tumor detection and histological subtype elements."
        description: 'Element-wise analysis'
        url: '/projects/crc-ai-review/figure4.webp'
        border: light

  - section_layout: 1col-narrow
    images:
      - caption: "Element-wise analysis of studies addressing biomarker-related report elements."
        description: 'Biomarker element analysis'
        url: '/projects/crc-ai-review/figure5.webp'
        border: light

  - section_layout: text
    content: |
      Overall, the review shows that AI tools for CRC pathology reporting have matured considerably, with strong
      reported performance for the most-studied elements. At the same time, the field remains fragmented: research
      effort is concentrated on a few report elements, many clinically required ones are neglected, and the lack of
      shared data, code, and trained models makes results difficult to verify or build upon. Closing these gaps
      through standardized datasets, external validation, and transparent publishing practices is essential if
      these tools are to move from promising publications into routine clinical practice.

  - section_layout: text
    content: |
      Figures reproduced from Baumann et al., npj Precision Oncology 9:381 (2025), licensed under CC BY 4.0.
      {:.paragraph-small}
---
