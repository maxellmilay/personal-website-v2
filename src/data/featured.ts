import Tech from '@/enums/tech';

export interface FeaturedProject {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  imgURL: string;
  repo?: string;
  link?: string;
  award?: string;
}

const featured: FeaturedProject[] = [
  {
    id: 1,
    name: 'Beacon',
    description:
      'A career guidance web app that uses Generative AI to provide users with personalized visual road maps towards their viable career option.',
    longDescription:
      "Beacon is a career guidance application that leverages Generative AI to deliver personalized visual roadmaps toward viable career options based on a user's profile information. Built during the UP Computer Science Guild Komsai Week Hackathon 2024, the team of 5 built a working prototype in just 6 hours. The app integrates Google Firebase for authentication and storage, and uses OpenAI LLM models to power its intelligent recommendation engine. Beacon went on to win 1st Place at the hackathon.",
    tech: [Tech.NEXT, Tech.TAILWIND, Tech.DJANGO, Tech.FIREBASE, Tech.LANGCHAIN, Tech.OPENAI, Tech.GCP],
    imgURL: '/images/featured/beacon.png',
    repo: 'https://github.com/maxellmilay/beacon',
    link: 'https://beaconph.site',
    award: '1st Place — UP CS Guild Komsai Week Hackathon 2024',
  },
  {
    id: 2,
    name: 'Finite Automaton Visualizer',
    description:
      'A web app that generates DFA diagrams from regular expressions and visually simulates string acceptance.',
    longDescription:
      'The Finite Automaton Visualizer generates Deterministic Finite Automaton (DFA) graphs from regular expressions. It verifies string inclusion by visually simulating the algorithm through an interactive interface. The core algorithm generates an abstract syntax tree from a regular expression with proper operator precedence. Built by a team of 4 using agile development, with the interactive graph powered by Reactflow.',
    tech: [Tech.NEXT, Tech.TAILWIND, Tech.REACTFLOW],
    imgURL: '/images/featured/fa-visualizer.png',
    repo: 'https://github.com/maxellmilay/fa-visualizer',
    link: 'https://favisualizer.vercel.app',
  },
  {
    id: 3,
    name: 'GreenWallet',
    description:
      'A budget tracker web app where users can create collections of received and outgoing transactions.',
    longDescription:
      'GreenWallet is a full-stack budget tracking application where users manage collections of received and outgoing financial transactions. It features OAuth 2.0 authentication, a Django REST backend with PostgreSQL, and a Vue.js + Vite frontend styled with Tailwind CSS. Deployed at greenwallet.site, it provides an intuitive interface for personal finance management.',
    tech: [Tech.VUE, Tech.DJANGO, Tech.TAILWIND, Tech.VITE, Tech.OAUTH_2, Tech.PSQL],
    imgURL: '/images/featured/greenwallet.png',
    repo: 'https://github.com/maxellmilay/greenwallet',
    link: 'https://greenwallet.site',
  },
  {
    id: 4,
    name: 'TMI Blog',
    description:
      'A blog website showcasing the activities and missions of TMI Fellowship church.',
    longDescription:
      'TMI Fellowship is a blog website that showcases the activities, events, and missions of a church community. Built with Next.js and Tailwind CSS for fast, SEO-friendly static generation, the site presents an elegant and accessible reading experience for congregation members and visitors alike.',
    tech: [Tech.TAILWIND, Tech.NEXT],
    imgURL: '/images/featured/tmi-blog.webp',
    link: 'https://www.tmifellowship.org',
    repo: 'https://github.com/maxellmilay/tmi',
  },
];

export default featured;
