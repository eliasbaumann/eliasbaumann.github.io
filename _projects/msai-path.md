---
date: 2025-06-10
published: true
title: "MSAI-Path"
description: "MSAI-Path: Predicting microsatellite instability from routine histology slides without re-inventing the wheel"
categories: Deep Learning, Computational Pathology
disciplines: Deep Learning, Nuclei Classification, Image Analysis, Clinical Statistics
media: Document
ownership: University of Bern
client:
time_period: 2023-2025
thumbnail: "/projects/msai-path/thumbnail.webp"

website:
  button_text: Paper
  url: https://www.sciencedirect.com/science/article/pii/S0893395225002303

intro: |
  Microsatellite instability (MSI) is an important biomarker in colorectal cancer, influencing both prognosis and treatment decisions.
  Current approaches for predicting MSI from routine H&E-stained whole slide images rely on end-to-end deep learning "black-box"
  models with limited interpretability. Meanwhile, experienced pathologists can intuitively identify MSI through specific histological
  features, captured in manual scoring systems like MS-Path. In this work, [published in Modern Pathology](https://www.sciencedirect.com/science/article/pii/S0893395225002303), we present a hybrid
  approach that combines computational and pathologist expertise. Nuclei and tissue segmentation models automatically quantify
  MSI-associated features outlined in the Bethesda guidelines, such as intraepithelial lymphocytes, tumor grade, mucinous component, and
  tertiary lymphoid structures. These features are then combined with clinical data in simple, interpretable classifiers. Validated on 3,256
  whole slide images from 2,267 patients across seven cohorts from five centers, the method reaches an AUC of up to 0.88 on resections
  and 0.90 on biopsies, on par with published black-box models while remaining fully explainable and verifiable.

content_layout:
  - section_layout: 2col-narrow
    images:
      - caption: "MSAI-Path overview: nuclei and tissue segmentation models quantify MSI-associated morphological features, which are combined with clinical data in interpretable classifiers."
        description: 'Method overview'
        url: '/projects/msai-path/figure1.webp'
        border: light

  - section_layout: text
    content: |
      Instead of training a single end-to-end network, we use established segmentation models, HoVer-NeXt for nuclei
      segmentation and classification and a tissue type segmentation model, to automatically quantify the morphological
      features that pathologists already use for MSI assessment. Each feature was validated against annotated datasets before
      being integrated, together with clinical variables, into logistic regression and random forest models predicting MSI status.

  - section_layout: 1col-narrow
    images:
      - caption: "Cross-cohort validation: AUC and AUPRC for all training/target cohort combinations across seven cohorts from five centers."
        description: 'Cross-cohort performance'
        url: '/projects/msai-path/figure2.webp'
        border: light

  - section_layout: 1col-narrow
    images:
      - caption: "Spearman correlations between the learned morphological features, showing they capture complementary information."
        description: 'Feature correlations'
        url: '/projects/msai-path/figure3.webp'
        border: light

  - section_layout: text
    content: |
      The learned variable importances strongly correlated with manual scoring systems such as MS-Path and aligned with
      individual pathologists' assessments. This confirms that the model "re-invents" neither the wheel nor the pathologist,
      but rather formalizes existing diagnostic expertise into a reproducible computational pipeline.

  - section_layout: 1col-narrow
    images:
      - caption: "Variable importances align with pathologist assessments (A/B), and the MSAI-Path score agrees with manual MS-Path scoring (C)."
        description: 'Interpretability and pathologist agreement'
        url: '/projects/msai-path/figure4.webp'
        border: light

  - section_layout: 1col-narrow
    images:
      - caption: "Feature selection stability across cohorts (A) and corresponding ROC curves (B)."
        description: 'Feature selection and ROC'
        url: '/projects/msai-path/figure5.webp'
        border: light

  - section_layout: text
    content: |
      At operating points above 95% specificity, the model could substantially reduce reflex
      immunohistochemistry workloads. We also observed significant intrapatient heterogeneity in predicted scores across
      slides from the same patient, emphasizing the importance of whole-case analysis over single-slide sampling.

  - section_layout: 1col-narrow
    images:
      - caption: "Performance at clinically relevant operating points with high specificity (A) and confusion matrices per cohort (B)."
        description: 'Clinical operating points'
        url: '/projects/msai-path/figure7.webp'
        border: light

  - section_layout: 1col-narrow
    images:
      - caption: "Case-level MSAI-Path scores across all patients, sorted by mean score, showing clear separation of MSS and MSI cases."
        description: 'Case-level scores'
        url: '/projects/msai-path/figure6.webp'
        border: light

  - section_layout: text
    content: |
      Figures reproduced from Baumann et al., Modern Pathology (2025), licensed under CC BY 4.0.
      {:.paragraph-small}
---
