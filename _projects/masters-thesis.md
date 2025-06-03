---
date: 2020-11-16
published: true
title: "M. Sc. Thesis"
description: "Landmark Localization NTM: Neural Turing Machine for data efficient landmark localization"
categories: Thesis, Deep Learning
disciplines: Deep Learning, Keypoint Detection, Image Analysis
media: Document
ownership: Personal
client:
time_period: 2019-2020
thumbnail: "/projects/masters-thesis/flywing_sample.webp"

website:
  button_text: GitHub
  url: https://github.com/eliasbaumann/LandmarkLocalizationNTM
intro: |
  In  my masters thesis, I explore data-efficient landmark localization in biomedical images using memory-augmented neural networks. The challenge of limited data availability in this domain is addressed through an iterative learning framework based on a U-Net architecture. The network predicts groups of landmarks sequentially, using its previous predictions as input, which introduces an implicit memory mechanism. Additionally, I incorporate explicit memory modules, such as [Neural Turing Machines (NTMs)](https://arxiv.org/pdf/1410.5401) and attention gates, to enhance the model's ability to store and retrieve relevant information. The results show that iterative learning significantly improves landmark localization, particularly on small datasets, with the baseline U-Net often outperforming more complex memory-augmented models.

content_layout:
  - section_layout: 2col
    images:
      - caption:
        description: 'Neural Turing Machine'
        url: '/projects/masters-thesis/ntm_architecture.png'
        border: light
        width:
        height:
      - caption:
        description: 'Unet with Neural Turing Machine Blocks'
        url: '/projects/masters-thesis/ntm_unet.png'
        width:
        height:

  - section_layout: text
    content: |
      The research is evaluated on two datasets: Flywing, containing fruit fly wing images, and Cephal, a cephalometric X-ray dataset. On Flywing, the iterative approach with the baseline U-Net achieves the best results, especially when predicting landmarks in smaller groups, demonstrating the effectiveness of implicit memory. Providing ground truth landmarks as input further improves accuracy, particularly for manually annotated landmarks. On the Cephal dataset, the attention-gate U-Net performs best in iterative training, suggesting that explicit memory mechanisms can be beneficial in certain contexts. However, NTM-based models, while promising, do not consistently outperform simpler architectures, indicating the need for further refinement.

  - section_layout: 1col
    images:
      - caption:
        description: 'Prediction results'
        url: '/projects/masters-thesis/iterative_attention.png'
        width:
        height:
  - section_layout: text
    content: |
      This work makes significant contributions by successfully applying an iterative task structure to landmark localization and demonstrating its effectiveness on small datasets. It also provides valuable insights into the use of memory-augmented neural networks, comparing NTMs and attention gates in a novel context. The findings suggest that iterative learning, combined with memory mechanisms, can improve the accuracy of landmark localization, even with limited training data, which is crucial for biomedical image analysis.

      Overall, this thesis advances the field of landmark localization by introducing a data-efficient approach that leverages both implicit and explicit memory. The results are promising, showing that iterative learning and memory-augmented models can enhance neural network performance in tasks with limited data. Future research directions include optimizing memory modules, exploring different landmark ordering strategies, and validating the approach on larger datasets. This work lays a strong foundation for further exploration of memory-augmented neural networks in biomedical image analysis and beyond.

      For more information, consider reading the [full thesis](https://github.com/eliasbaumann/LandmarkLocalizationNTM/blob/master/Thesis_Elias_Baumann.pdf).


---
