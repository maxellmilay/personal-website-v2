export interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  achievements: string[];
  logoFallback: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  highlights: string[];
}

export const educationList: Education[] = [
  {
    id: 1,
    institution: 'University of the Philippines Cebu',
    degree: 'Bachelor of Science in Computer Science',
    location: 'Cebu City, Cebu',
    period: '2020 – 2024',
    achievements: [
      'Led 3 teams through small and large-scale competitions, achieving the best competition placements and highest ratings',
    ],
    logoFallback: 'UP',
  },
  {
    id: 2,
    institution: 'Philippine Science High School — Central Visayas Campus',
    degree: 'STEM Strand',
    location: 'Argao, Cebu',
    period: '2016 – 2020',
    achievements: [
      'High Honors & Excellency in Physics',
      'Project DALOY — Drone-based Depth and Atmospheric Level Open-Source monitoring device',
      'Thesis: Simulated Biomimicry of Photovoltaic Tree Architecture Based on Pinus Strobus',
    ],
    logoFallback: 'PS',
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford',
    highlights: [
      'Supervised, unsupervised, and reinforcement learning with TensorFlow & Scikit-learn',
      'Deep Q Learning (PPO), K-means clustering, and ensemble regression models',
    ],
  },
  {
    id: 2,
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford',
    highlights: [
      '5 hands-on courses covering neural networks, optimization techniques, and ML best practices',
      'Built CNNs and RNNs from scratch: VGG-16/19 and MobileNet variants on CIFAR-10',
    ],
  },
];
