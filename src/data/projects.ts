import Tech from '@/enums/tech';

const projects = [
  {
    id: 1,
    name: 'CMSC Blog',
    description:
      'CMSC Blog contains anecdotes and informational blogs revolving around technology and the life of computer science majors.',
    tech: [Tech.TAILWIND, Tech.NEXT],
    link: 'https://cmsc-blog.vercel.app',
    repo: 'https://github.com/maxellmilay/cmsc-blog',
  },
  {
    id: 2,
    name: 'DJackets',
    description: 'An e-commerce site that sells seasonal jackets',
    tech: [Tech.VUE, Tech.VITE, Tech.DJANGO, Tech.STRIPE, Tech.TAILWIND],
    link: 'https://djackets.vercel.app',
    repo: 'https://github.com/maxellmilay/djackets',
  },
  {
    id: 3,
    name: 'Medata',
    description:
      'A media progress tracking platform, where users can track the progress of the media they are currently consuming',
    tech: [Tech.REACT, Tech.TAILWIND, Tech.REDUX, Tech.FIREBASE],
    link: 'https://medata-frontend.vercel.app',
    repo: 'https://github.com/maxellmilay/medata-frontend',
  },
  {
    id: 5,
    name: 'Rotom Dex',
    description: 'A pokedex desktop application that displays and filters Gen 1 Pokemon',
    link: '',
    repo: 'https://github.com/maxellmilay/rotom-dex-3',
    tech: [Tech.CPP, Tech.SFML],
  },
  {
    id: 6,
    name: 'Bucket Plan',
    description: 'Bucket list site where people can list future plans',
    link: 'https://bucket-plan.vercel.app',
    repo: 'https://github.com/maxellmilay/bucket-plan',
    tech: [Tech.NEXT, Tech.TAILWIND],
  },
  {
    id: 7,
    name: 'Personal Website v1',
    description: 'First version of my personal website',
    link: 'https://old-maxell-milay.vercel.app',
    repo: 'https://github.com/maxellmilay/personal-website',
    tech: [Tech.NEXT, Tech.TAILWIND],
  },
  {
    id: 8,
    name: 'Number System Converter',
    description: 'Convert decimal to binary, octal, or hexadecimal vice-versa',
    link: '',
    repo: 'https://github.com/maxellmilay/number_system_converter',
    tech: [Tech.PYTHON],
  },
  {
    id: 9,
    name: 'Hikaway Showcase',
    description: 'A site that summarizes the Hikaway asthma prevention device',
    link: 'https://maxellmilay.github.io/hikaway',
    repo: 'https://github.com/maxellmilay/hikaway',
    tech: [Tech.HTML, Tech.CSS],
  },
  {
    id: 10,
    name: 'Concord',
    description: 'A social media platform where users can post questions and anonymous comments',
    link: '',
    repo: 'https://github.com/sheensantoscapadngan/freedom_wall',
    tech: [Tech.REACT, Tech.MUI, Tech.FIREBASE],
  },
  {
    id: 11,
    name: 'Date a Meme',
    description:
      'A dating platform where users can match with each other based on their meme preferences',
    link: 'https://datememe.org',
    repo: '',
    tech: [Tech.REACT, Tech.FIREBASE, Tech.MUI],
  },
  {
    id: 12,
    name: 'Personal Website v2',
    description: 'Second version of my personal website',
    link: 'https://maxell-milay.vercel.app',
    repo: 'https://github.com/maxellmilay/personal-website-v2',
    tech: [Tech.NEXT, Tech.TAILWIND],
  },
];

export default projects;
