export interface Experience {
  name: string;
  job_position: string;
  start_date: string;
  end_date: string;
  location: string;
  contributions: string[];
  logo: string | null;
  logoFallback: string;
}

const experiences: Experience[] = [
  {
    name: 'ECLARO',
    job_position: 'AI Engineer',
    start_date: 'April 2025',
    end_date: 'Present',
    location: 'Quezon City, Metro Manila',
    contributions: [
      'Architected enterprise-scale Generative AI orchestration framework with OpenAI GPT-4/GPT-4o, AWS Lambda and Step Functions — processing 10,000+ monthly documents across 5+ business units',
      'Pioneered multi-agent workflow prototypes using LangChain and LangGraph, achieving 40% reduction in processing time and 35% improvement in decision consistency',
      'Developed 6+ custom MCP connectors integrating policy APIs, claims databases, and document repositories for secure enterprise data access',
      'Implemented AI observability stack with AWS CloudWatch achieving 99.5% framework uptime and 60% faster incident detection',
      'Redesigned IDP pipeline using Amazon Textract and custom NER, improving field extraction accuracy from 78% to 92%',
      'Engineered FNOL claims processing system using spaCy NLP pipelines, achieving 88% accuracy across 15+ structured field types',
      'Optimized LLM inference costs via prompt engineering and model selection, reducing API expenses by 30%',
    ],
    logo: null,
    logoFallback: 'EC',
  },
  {
    name: 'Insight Genie',
    job_position: 'Data Scientist Intern',
    start_date: 'June 2025',
    end_date: 'September 2025',
    location: 'Singapore',
    contributions: [
      'Engineered alternative credit scoring features using digital footprint analysis and eKYC, expanding financial inclusion coverage by 40%',
      'Integrated open-source Sentiment Emotion Recognition (SER) models, improving classification accuracy by 35%',
      'Developed and validated voice analysis ML models testing 12+ architectures for production deployment',
      'Streamlined ML experimentation using MLflow, reducing iteration time by 45% across 50+ experiments',
      'Deployed Streamlit-based voice model interface, reducing non-technical user setup time from 2 hours to 15 minutes',
    ],
    logo: null,
    logoFallback: 'IG',
  },
  {
    name: 'BitWork Solutions',
    job_position: 'Lead Software Engineer',
    start_date: 'December 2024',
    end_date: 'April 2025',
    location: 'Miami, Florida',
    contributions: [
      'Led cross-functional team of 5 engineers delivering an image processing mobile app from concept to production, achieving 95% sprint velocity across 8+ cycles',
      'Orchestrated agile sprint planning for 50+ user stories, maintaining 90% on-time delivery and reducing scope creep by 40%',
      'Led backend migration from Directus/AWS Lambda to Django REST API with PostgreSQL, reducing infrastructure costs by 35% and improving API response times by 50%',
      'Implemented CI/CD pipelines decreasing release cycle time from 2 weeks to 3 days',
      'Established code quality standards reducing production bugs by 65% and technical debt by 55%',
    ],
    logo: null,
    logoFallback: 'BW',
  },
  {
    name: 'BPOSeats',
    job_position: 'AI Engineer',
    start_date: 'June 2024',
    end_date: 'January 2025',
    location: 'Mandaue City, Cebu',
    contributions: [
      'Architected ML-powered productivity forecasting system processing 15,000+ historical records, projected to increase operational efficiency by 55%',
      'Engineered prompt engineering strategies for OpenAI GPT, reducing LLM costs by 40% via context optimization and response caching',
      'Co-led AI-driven effort estimation framework integrating NSGA-II genetic algorithms with LLM reasoning, improving prediction accuracy by 30%',
      'Implemented enterprise-wide LLM cost monitoring dashboard tracking token usage across 8+ features, reducing operational expenses by 35%',
      'Architected CI/CD pipelines reducing manual QA time by 70% and catching 85% of bugs pre-production',
    ],
    logo: '/images/bposeats.png',
    logoFallback: 'BP',
  },
  {
    name: 'BPOSeats',
    job_position: 'Full Stack Web Developer',
    start_date: 'September 2023',
    end_date: 'May 2024',
    location: 'Mandaue City, Cebu',
    contributions: [
      "Pioneered company's first vector database using PostgreSQL with pgvector, enabling semantic search across 5,000+ documentation entries with 85% retrieval accuracy",
      'Developed RAG-powered customer support chatbot leveraging OpenAI embeddings, projected to deflect 75% of tier-1 support tickets',
      'Engineered automated ETL pipeline migrating 2,500+ legacy documentation pages to vector database with sub-3-second response times',
      'Integrated Vue.js and Django unit tests into CI/CD pipelines, reducing production deployment failures by 80%',
      'Debugging and optimization reduced critical bugs by 60%, contributing to 65% improvement in system availability',
    ],
    logo: '/images/bposeats.png',
    logoFallback: 'BP',
  },
  {
    name: 'Symph',
    job_position: 'Web Developer Intern',
    start_date: 'December 2022',
    end_date: 'March 2023',
    location: 'Cebu City, Cebu',
    contributions: [
      'Assisted in deploying code changes to 3+ client websites, learning production deployment and staging environment best practices',
      'Diagnosed and resolved 15+ UI/UX issues, improving page load performance by 25% and mobile responsiveness across 5+ key user flows',
      'Implemented feature enhancements using HTML, CSS, JavaScript, and React, contributing to 20% increase in client satisfaction',
      'Collaborated in agile sprint cycles including code reviews and daily standups',
    ],
    logo: '/images/symph.png',
    logoFallback: 'SY',
  },
];

export default experiences;
