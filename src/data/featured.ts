import Tech from '@/enums/tech';

const featured = [
  {
    id: 1,
    name: 'CMSC Blog',
    description:
      'CMSC Blog contains anecdotes and informational blogs revolving around technology and the life of computer science majors.',
    tech: [Tech.TAILWIND, Tech.NEXT],
    imgURL: '/images/featured/cmsc-blog.png',
  },
  {
    id: 2,
    name: 'Medata',
    description:
      'Medata is a media progress tracking platform, where users can track the progress of the media they are currently consuming (e.g. TV Series, Books, Anime). Users can add and track the media title, total content to consume (e.g. book pages, chapters, episodes), current content consumed, and others.',
    tech: [Tech.REACT, Tech.TAILWIND, Tech.REDUX, Tech.FIREBASE],
    imgURL: '/images/featured/medata.png',
  },
  {
    id: 3,
    name: 'TMI Blog',
    description:
      'TMI Fellowship is a blog website that showcases the activities and missions of a church.',
    tech: [Tech.TAILWIND, Tech.NEXT],
    imgURL: '/images/featured/tmi-blog.png',
  },
];
export default featured;
