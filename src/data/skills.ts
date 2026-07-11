export interface SkillCategory {
  category: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    category: 'AI / Machine Learning',
    items: [
      'OpenAI GPT-4/4o',
      'LangChain',
      'LangGraph',
      'RAG',
      'Multi-Agent Systems',
      'spaCy',
      'TensorFlow',
      'Scikit-learn',
      'MLflow',
      'Amazon Textract',
      'Vertex AI',
      'MLOps',
    ],
  },
  {
    category: 'Backend',
    items: ['Python', 'Django', 'REST API', 'PostgreSQL', 'pgvector', 'Streamlit'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS Lambda',
      'Step Functions',
      'CloudWatch',
      'S3',
      'DynamoDB',
      'GCP',
      'Cloud Run',
      'Cloud SQL',
      'Docker',
      'GitHub Actions',
      'Terraform',
      'CI/CD',
    ],
  },
];

export default skills;
