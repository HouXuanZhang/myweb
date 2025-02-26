import React from "react";
import "./LLMInfo.css";

function LLMInfo() {
  return (
    <div className="llm-info">
      <h1 className="fade-in">My Research Projects</h1>

      {/* Project 1: Medical Ophthalmology Text Recognition */}
      <div className="project slide-in">
        <div className="icon ophthalmology"></div>
        <h2>Medical Ophthalmology Text Recognition</h2>
        <p>
          Developing an intelligent ophthalmology text recognition system based on Natural Language Processing (NLP) 
          and Computer Vision (CV) techniques. Utilizing Optical Character Recognition (OCR) and deep learning models 
          such as CRNN and Transformer, the system accurately extracts key information from medical reports, prescriptions, 
          and examination results. Additionally, Named Entity Recognition (NER) and medical knowledge graphs are integrated 
          to enhance medical terminology parsing, facilitating intelligent ophthalmology text processing and diagnostic support.
        </p>
      </div>

      {/* Project 2: Text-Based American Sign Language Video Generation */}
      <div className="project slide-in">
        <div className="icon sign-language"></div>
        <h2>Text-Based American Sign Language Video Generation</h2>
        <p>
          Researching text-to-American Sign Language (ASL) video generation models, exploring NLP and Computer Vision applications 
          in silent language translation. The system employs Transformer-based architectures and 3D pose estimation techniques 
          to analyze text semantics and generate grammatically accurate sign language motion sequences. LSTM and attention mechanisms 
          enhance gesture transition fluency, while Generative Adversarial Networks (GANs) improve the naturalness 
          of generated sign language. This technology provides a more efficient cross-linguistic communication tool 
          for the hearing-impaired community.
        </p>
      </div>

      {/* Project 3: AI-Based Chest X-ray Analysis and Medical Recommendation Generation */}
      <div className="project slide-in">
        <div className="icon xray"></div>
        <h2>AI-Based Chest X-ray Analysis and Medical Recommendation Generation</h2>
        <p>
          Investigating deep learning-based automated chest X-ray analysis and medical decision-support systems. 
          Combining Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs) to improve medical image classification 
          and lesion detection accuracy. Model explainability is enhanced using Grad-CAM and SHAP to ensure transparent decision-making. 
          By integrating clinical knowledge bases and Large Language Models (LLMs), the system autonomously generates personalized 
          medical recommendations, assisting physicians in diagnostic decision-making. The system aims to enhance diagnostic efficiency 
          for pneumonia, tuberculosis, and tumor detection.
        </p>
      </div>
    </div>
  );
}

export default LLMInfo;
