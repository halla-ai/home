---
title: "Curriculum"
description: "A systematic curriculum for training AI professionals"
---

---

<div class="mermaid">
graph TD
    classDef track fill:#c7bed7,stroke:#333,stroke-width:3px,rx:12px,ry:12px,font-size:20px,font-family:Hahmlet,font-weight:700;
    classDef semester fill:#fff,stroke:#999,stroke-width:2px,rx:8px,ry:8px,font-size:18px,font-family:Hahmlet,font-weight:600;
    classDef course fill:#e1f5fe,stroke:#81bdbf,stroke-width:2px,rx:8px,ry:8px,font-size:19px,font-family:Hahmlet,font-weight:500;
    classDef goal fill:#022f44,color:#fff,stroke:#005a83,stroke-width:3px,rx:12px,ry:12px,font-size:20px,font-family:Hahmlet,font-weight:700;

    A[인공지능핵심] --> A11 --> A12 --> A21 --> A22 --> A31 --> A32 --> A41[4-1] --> A42 --> AG
    B[소프트웨어&시스템] --> B11 --> B12 --> B21 --> B22 --> B31[3-1] --> B32 --> B41 --> B42[4-2] --> BG
    C[데이터분석] --> C11 --> C12 --> C21 --> C22[2-2] --> C31[3-1] --> C32 --> C41[4-1] --> C42[4-2] --> CG
    D[AI응용기술] --> D11[1-1] --> D12[1-2] --> D21[2-1] --> D22 --> D31 --> D32 --> D41 --> D42[4-2] --> DG
    E[실무역량] --> E11[1-1] --> E12[1-2] --> E21[2-1] --> E22[2-2] --> E31 --> E32 --> E41 --> E42 --> EG

    subgraph A11[1-1]
    A111[인공지능과사회]
    end
    subgraph A12[1-2]
    A121[인공지능개론]
    A122[언어모형과자연어처리]
    end
    subgraph A21[2-1]
    A211[기계학습]
    A212[컴퓨터비전]
    A213[신호및시스템]
    end
    subgraph A22[2-2]
    A221[패턴인식]
    A222[음성인식및합성]
    A223[객체인식추적]
    end
    subgraph A31[3-1]
    A311[딥러닝]
    A312[알고리즘]
    A313[멀티모달생성형인공지능]
    end
    subgraph A32[3-2]
    A321[딥러닝자연어처리]
    end
    subgraph A42[4-2]
    A421[차세대인공지능]
    end
    subgraph E31[3-1]
    E311[캡스톤디자인1]
    end
    subgraph E32[3-2]
    E321[캡스톤디자인2]
    end
    subgraph E41[4-1]
    E411[캡스톤디자인3]
    end
    subgraph E42[4-2]
    E421[캡스톤디자인4]
    end
    subgraph D22[2-2]
    D221[로보틱스기초]
    end
    subgraph D31[3-1]
    D311[협동로봇활용]
    end
    subgraph D32[3-2]
    D321[게임프로그래밍]
    D322[지능형HCI와UX]
    end
    subgraph D41[4-1]
    D411[3D엔진]
    D412[개인화AI신호처리]
    end
    subgraph C11[1-1]
    C111[인공지능수학]
    end
    subgraph C12[1-2]
    C121[확률통계의기초]
    C122[빅데이터기초및실습]
    end
    subgraph C21[2-1]
    C211[R프로그래밍]
    end
    subgraph C32[3-2]
    C321[지능형시스템]
    end
    subgraph B11[1-1]
    B111[정보보안개론]
    B112[기초파이썬코딩]
    end
    subgraph B12[1-2]
    B121[서버및네트워크보안]
    end
    subgraph B21[2-1]
    B211[계산과학]
    B212[운영체제]
    end
    subgraph B22[2-2]
    B221[AI보안]
    B222[데이터구조]
    end
    subgraph B32[3-2]
    B321[클라우드컴퓨팅]
    B322[컴퓨터구조]
    end
    subgraph B41[4-1]
    B411[머신러닝시스템]
    end

    AG[인공지능엔지니어/개발자]
    BG[소프트웨어&시스템전문가]
    CG[데이터분석전문가]
    DG[AI로봇전문가/AI응용기술개발자]
    EG[실무역량강화]

    class A,B,C,D,E track;
    class A11,A12,A21,A22,A31,A32,A41,A42,B11,B12,B21,B22,B31,B32,B41,B42,C11,C12,C21,C22,C31,C32,C41,C42,D11,D12,D21,D22,D31,D32,D41,D42,E11,E12,E21,E22,E31,E32,E41,E42 semester;
    class A111,A121,A122,A211,A212,A213,A221,A222,A223,A311,A312,A313,A321,A421,B111,B112,B121,B211,B212,B221,B222,B321,B322,B411,C111,C121,C122,C211,C321,D221,D311,D321,D322,D411,D412,E311,E321,E411,E421 course;
    class AG,BG,CG,DG,EG goal;

</div>

---

## Artificial Intelligence Major

### Educational Goals

The Department of Artificial Intelligence aims to train experts in Artificial Intelligence (AI), Software & Systems, Data Analysis, and AI Application Technologies.

1. Cultivate AI engineers and developers who can deeply understand and apply core AI technologies
2. Train professionals with broad knowledge of software and systems
3. Develop data analysis specialists with the ability to process and analyze Big Data
4. Train specialists with the ability to develop AI robots and AI application technologies
5. Strengthen field applicability through practical, project-based experience

### Course Plan

1. Staged Learning Structure:
   - Years 1–2: Focus on foundational courses (e.g., Introduction to AI, Python Programming, Data Structures, etc.)
   - Years 3–4: Focus on advanced and applied courses (e.g., Deep Learning, Collaborative Robot Applications, Machine Learning Systems, etc.)
2. Systematic Track-Based Education:
   - AI Core: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, etc.
   - Software & Systems: Operating Systems, Computer Architecture, Cloud Computing, etc.
   - Data Analysis: Big Data Fundamentals, R Programming, Intelligent Systems, etc.
   - AI Application Technologies: Robotics Fundamentals, Collaborative Robot Applications, Game Programming, etc.
3. Practical Competency Enhancement:
   - Capstone Design 1–4 conducted consecutively across Years 3 and 4
   - Industry-linked projects and internship opportunities provided
4. Reflecting Latest Technology Trends:
   - Regular curriculum updates to incorporate new technologies and industry requirements
   - Learning cutting-edge AI technologies through courses such as Next-Generation Artificial Intelligence

### Differentiation Strategy

1. Integrated AI Education System:
   - Comprehensive education spanning from core AI technologies to applications, systems, and data analysis
   - Systematic learning through 5 tracks (AI Core, Software & Systems, Data Analysis, AI Application Technologies, Practical Competency)
2. Practical Project-Based Education:
   - Continuous project-based learning through Capstone Design courses spanning 4 semesters
   - Practically oriented courses such as Collaborative Robot Applications and Machine Learning Systems
3. Convergence Technology Education:
   - Convergence technology education across AI and diverse fields such as Robotics, Gaming, and HCI
   - Courses reflecting the latest technology trends including Multimodal Generative AI and 3D Engine
4. Staged In-Depth Learning:
   - Curriculum structured for systematic learning from foundational to advanced level by year
   - Staged learning from basic to advanced courses within each track
5. Industry-Academia Linked Education:
   - Curriculum structured to reflect industry requirements
   - Project-centered learning for solving real-world industrial problems

---

### Curriculum Roadmap

<div class="mermaid">
graph TD
    classDef track fill:#c7bed7,stroke:#333,stroke-width:3px,rx:12px,ry:12px,font-size:20px,font-family:Hahmlet,font-weight:700;
    classDef semester fill:#fff,stroke:#999,stroke-width:2px,rx:8px,ry:8px,font-size:18px,font-family:Hahmlet,font-weight:600;
    classDef course fill:#e1f5fe,stroke:#81bdbf,stroke-width:2px,rx:8px,ry:8px,font-size:19px,font-family:Hahmlet,font-weight:500;
    classDef goal fill:#022f44,color:#fff,stroke:#005a83,stroke-width:3px,rx:12px,ry:12px,font-size:20px,font-family:Hahmlet,font-weight:700;

    A[인공지능핵심] --> A11 --> A12 --> A21 --> A22 --> A31 --> A32 --> A41[4-1] --> A42 --> AG
    B[소프트웨어&시스템] --> B11 --> B12 --> B21 --> B22 --> B31[3-1] --> B32 --> B41 --> B42[4-2] --> BG
    C[데이터분석] --> C11 --> C12 --> C21 --> C22[2-2] --> C31[3-1] --> C32 --> C41[4-1] --> C42[4-2] --> CG
    D[AI응용기술] --> D11[1-1] --> D12[1-2] --> D21[2-1] --> D22 --> D31 --> D32 --> D41 --> D42[4-2] --> DG
    E[실무역량] --> E11[1-1] --> E12[1-2] --> E21[2-1] --> E22[2-2] --> E31 --> E32 --> E41 --> E42 --> EG

    %% 트랙 간 연결
    A -.-> B
    A -.-> C
    A -.-> D
    B -.-> E
    C -.-> E
    D -.-> E

    subgraph A11[1-1]
    A111[인공지능과사회]
    end
    subgraph A12[1-2]
    A121[인공지능개론]
    A122[언어모형과자연어처리]
    end
    subgraph A21[2-1]
    A211[기계학습]
    A212[컴퓨터비전]
    A213[신호및시스템]
    end
    subgraph A22[2-2]
    A221[패턴인식]
    A222[음성인식및합성]
    A223[객체인식추적]
    end
    subgraph A31[3-1]
    A311[딥러닝]
    A312[알고리즘]
    A313[멀티모달생성형인공지능]
    end
    subgraph A32[3-2]
    A321[딥러닝자연어처리]
    end
    subgraph A42[4-2]
    A421[차세대인공지능]
    end
    subgraph E31[3-1]
    E311[캡스톤디자인1]
    end
    subgraph E32[3-2]
    E321[캡스톤디자인2]
    end
    subgraph E41[4-1]
    E411[캡스톤디자인3]
    end
    subgraph E42[4-2]
    E421[캡스톤디자인4]
    end
    subgraph D22[2-2]
    D221[로보틱스기초]
    end
    subgraph D31[3-1]
    D311[협동로봇활용]
    end
    subgraph D32[3-2]
    D321[게임프로그래밍]
    D322[지능형HCI와UX]
    end
    subgraph D41[4-1]
    D411[3D엔진]
    D412[개인화AI신호처리]
    end
    subgraph C11[1-1]
    C111[인공지능수학]
    end
    subgraph C12[1-2]
    C121[확률통계의기초]
    C122[빅데이터기초및실습]
    end
    subgraph C21[2-1]
    C211[R프로그래밍]
    end
    subgraph C32[3-2]
    C321[지능형시스템]
    end
    subgraph B11[1-1]
    B111[정보보안개론]
    B112[기초파이썬코딩]
    end
    subgraph B12[1-2]
    B121[서버및네트워크보안]
    end
    subgraph B21[2-1]
    B211[계산과학]
    B212[운영체제]
    end
    subgraph B22[2-2]
    B221[AI보안]
    B222[데이터구조]
    end
    subgraph B32[3-2]
    B321[클라우드컴퓨팅]
    B322[컴퓨터구조]
    end
    subgraph B41[4-1]
    B411[머신러닝시스템]
    end

    %% 트랙 간 공유 과목
    A211 -.-> D
    A212 -.-> D
    B112 -.-> C
    B112 -.-> D
    B411 -.-> D

    AG[인공지능엔지니어/개발자]
    BG[소프트웨어&시스템전문가]
    CG[데이터분석전문가]
    DG[AI로봇전문가/AI응용기술개발자]
    EG[실무역량강화]

    class A,B,C,D,E track;
    class A11,A12,A21,A22,A31,A32,A41,A42,B11,B12,B21,B22,B31,B32,B41,B42,C11,C12,C21,C22,C31,C32,C41,C42,D11,D12,D21,D22,D31,D32,D41,D42,E11,E12,E21,E22,E31,E32,E41,E42 semester;
    class A111,A121,A122,A211,A212,A213,A221,A222,A223,A311,A312,A313,A321,A421,B111,B112,B121,B211,B212,B221,B222,B321,B322,B411,C111,C121,C122,C211,C321,D221,D311,D321,D322,D411,D412,E311,E321,E411,E421 course;
    class AG,BG,CG,DG,EG goal;

</div>

---

### Course Descriptions

- **AI and Society**

  Covers the social impact and ethical issues of artificial intelligence. Analyzes the effects of AI technology on society, economy, and culture, and explores ethical dilemmas arising from AI use along with potential solutions.

- **Mathematics for AI**

  Studies the mathematical foundations required for AI. Covers mathematical bases of AI algorithms including linear algebra, probability theory, and optimization theory, and learns how to apply them to real AI problems.

- **Fundamentals of Python Coding**

  Studies the basics of Python programming. Covers core Python concepts including variables, control statements, functions, and object-oriented programming, and also introduces the use of AI-related libraries.

- **Introduction to Information Security**

  Studies the basic concepts and principles of information security. Covers various security technologies including encryption, network security, and system security, and also addresses security issues in AI systems.

- **Introduction to Artificial Intelligence**

  Introduces the basic concepts, history, and major technical fields of AI. Provides a foundational understanding of core AI areas including machine learning, neural networks, natural language processing, and computer vision.

- **Language Models and Natural Language Processing**

  Studies the basic concepts of natural language processing and the principles of language models. Covers various NLP applications such as text analysis, machine translation, and sentiment analysis, and introduces the latest language model technologies.

- **Fundamentals of Probability and Statistics**

  Studies the basic concepts of probability theory and statistics. Covers statistical methods required for data analysis including probability distributions, estimation, and hypothesis testing, and learns how to apply them in AI and machine learning.

- **Big Data Fundamentals and Practice**

  Studies the concepts and processing technologies of big data. Practices with big data platforms such as Hadoop and Spark and data analysis techniques, and explores the connection between AI and big data.

- **Machine Learning**

  Studies the basic principles and algorithms of machine learning. Covers various learning methodologies including supervised learning, unsupervised learning, and reinforcement learning, along with real-world application cases, and builds practical skills through hands-on exercises.

- **Computer Vision**

  Studies the basic principles of digital image processing and analysis. Covers major application areas of computer vision including image recognition, object detection, and face recognition, and introduces the latest deep learning-based vision technologies.

- **Signals and Systems**

  Studies the fundamentals of signal processing and systems theory. Covers digital signal processing, frequency analysis, and filter design, and provides foundational knowledge required for AI system design.

- **R Programming**

  Studies data analysis techniques using the R language. Practices major R functions including data processing, visualization, and statistical analysis, and also applies them to implementing machine learning algorithms.

- **Computational Science**

  Studies scientific computational methods such as numerical analysis and simulation. Provides knowledge needed to understand the mathematical foundations of AI algorithms and covers optimization techniques for complex AI models.

- **Operating Systems**

  Studies the structure and principles of computer operating systems. Covers core OS functions including process management, memory management, and file systems, and provides OS knowledge required for operating AI systems.

- **Data Structures**

  Studies fundamental data structures and algorithms. Covers data structures such as arrays, linked lists, trees, and graphs along with related algorithms, and learns efficient data structure design methods required for implementing AI algorithms.

- **Pattern Recognition**

  Studies techniques for recognizing and classifying patterns from data. Covers various methodologies including statistical pattern recognition and neural network-based pattern recognition, and explores pattern recognition applications as a core technology in AI systems.

- **Speech Recognition and Synthesis**

  Studies the basic principles of speech signal processing, speech recognition, and speech synthesis. Conducts theory and practice required for developing speech-based AI systems, and introduces the latest deep learning-based speech processing technologies.

- **Object Recognition and Tracking**

  Studies technologies for recognizing and tracking objects in computer vision. Covers advanced technologies such as real-time object detection and multi-object tracking, and explores application fields including robot vision and autonomous driving.

- **Robotics Fundamentals**

  Studies the basic principles of robotics. Covers foundational knowledge required for robot design and control including kinematics, dynamics, and control theory, and introduces the convergence of AI and robotics.

- **AI Security**

  Studies security vulnerabilities in AI systems and countermeasures. Covers AI-specific security issues such as adversarial attacks and privacy protection, and explores methods for developing safe and trustworthy AI systems.

- **Deep Learning**

  Studies the structure and learning algorithms of deep neural networks. Covers various deep learning models such as CNN, RNN, and GAN and their applications, and builds the ability to design and implement deep learning models through real projects.

- **Algorithms**

  Studies the design and analysis methods of computer algorithms. Covers from basic algorithms such as sorting, searching, and graph algorithms to advanced algorithms used in AI, and builds the ability to implement efficient AI systems.

- **Multimodal Generative AI**

  Studies AI technologies that integrate and process various modalities such as text, images, and speech to generate content. Covers the latest multimodal AI models and their applications, and builds the ability to develop creative AI systems.

- **Collaborative Robot Applications**

  Studies the principles and applications of collaborative robots that work alongside humans. Covers robot programming, safety design, and human-robot interaction, and builds AI-based robot control system development skills.

- **Intelligent Systems**

  Studies the design and implementation methods of AI-based intelligent systems. Covers various intelligent systems including expert systems and decision support systems, and explores AI system applications in real industrial fields.

- **Deep Learning Natural Language Processing**

  Studies deep learning-based natural language processing technologies. Covers the latest language models such as Transformer and BERT and their applications, and builds advanced NLP application development skills for dialogue systems and question-answering systems.

- **Cloud Computing**

  Studies the concepts and technologies of cloud computing. Covers virtualization, distributed computing, and cloud service models, and learns methods for building and operating large-scale AI systems on the cloud.

- **Game Programming**

  Studies programming techniques required for game development. Covers game engine utilization, graphics programming, and AI game agent development, and builds game development skills using AI technologies.

- **Intelligent HCI and UX**

  Studies the design of human-computer interaction (HCI) using artificial intelligence and methods for optimizing user experience (UX). Covers AI-based interface design, user modeling, and adaptive system development.

- **Machine Learning Systems**

  Studies how to design, implement, and deploy machine learning models in real environments. Covers MLOps, model optimization, and large-scale machine learning system construction, and builds AI system operation skills in industrial settings.

- **3D Engine**

  Studies the structure and principles of 3D graphics engines. Covers core 3D engine functions including rendering, animation, and physics simulation, and learns how to create and process 3D content using AI technologies.

- **Personalized AI Signal Processing**

  Studies user-customized AI signal processing technologies. Covers AI-based signal processing applications such as personalized speech recognition and image processing, and builds adaptive signal processing system development skills.

- **Next-Generation Artificial Intelligence**

  Covers the latest AI technology trends and future prospects. Introduces next-generation AI technologies such as quantum computing and neuromorphic computing, and explores the future development direction of AI and its potential impact.

- **Capstone Design 1–4**

  A process of planning, designing, and implementing actual projects by integrating knowledge learned throughout the undergraduate program, conducted over 4 semesters. Students gain practical experience through industry-linked projects and experience the full process of AI system development.
