import testimg from '../images/code2.jpg';
import rap1 from '../images/projectsImages/rap1.png';
import rap1th from '../images/projectsImages/rap1th.png';
import rap2 from '../images/projectsImages/rap2.png';
import rap2th from '../images/projectsImages/rap2th.png';
import rap3 from '../images/projectsImages/rap3.png';
import rap3th from '../images/projectsImages/rap3th.png';

import ships1 from '../images/projectsImages/ships1.jpg';
import ships2 from '../images/projectsImages/ships2.png';
import ships3 from '../images/projectsImages/ships3.gif';

import blog1 from '../images/projectsImages/blog1.png';
import blog2 from '../images/projectsImages/blog2.png';
import blog3 from '../images/projectsImages/blog3.png';

import dzira1 from '../images/projectsImages/dzira1.png';
import dzira2 from '../images/projectsImages/dzira2.png';
import dzira3 from '../images/projectsImages/dzira3.png';
//TODO: there's another more gatsby-oriented way to import imgs. Its fine for now but gonna be mess if u develop
//this section further

export const Projects = [
  {
    name: 'TeamShips.io',
    descriptionShort:
      'A multiplayer online web game. Players are fighting each other ' +
      'in space as warships. They can shoot down their foes or trap them with use of deadly mines. In order to exceed your enemies, ' +
      'you can destroy metheors and gain points',
    description:
      "Team project for my programming classes at the University of Gdansk. It's a multiplayer online web game. Players are fighting each other " +
      'in space as warships. They can shoot down their foes or trap them with use of deadly mines. In order to gain advantage over your enemies, ' +
      "you can gain points by destroying metheors (yellow dots). Your personal record is saved after death in our database and you're able to start from scratch" +
      'TeamShips.io uses Node.js microservice server to handle all the crucial operations with WebSockets in order to prevent client-side cheating',
    myAchievements: [
      'Implemented game logic – moving, aiming and shooting, fighting system, scores. Developed dynamic, real-time rendering using P5.js & WebSockets.',
      'Created a microservice Node.js/Express/Socket.io game server to manage game flow and communicate with both Spring backend app (via REST API) and front app (sockets).',
      'As my team was focused on Java/Spring part of the app, I conducted meetings to discuss available solutions, architecture and to ensure efficient workflow ',
    ],
    techStack: [
      'P5.js',
      'Socket.io',
      'Node.js & Express.js',
      'Thymeleaf',
      'Spring',
      'PostgreSQL',
      'Docker',
    ],
    photos: [
      {
        original: ships1,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: ships2,
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: ships3,
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
    github: 'https://github.com/Kugelek/statki',
    deployedAt: '',
    addictionalInfo: 'Team project',
  },
  {
    name: 'RapAnalyzer',
    descriptionShort:
      "Web app using Natural Language Processing to analyze sentiment of song's lyrics. Beginner-level artists and musicians might find the app interesting " +
      'since they can easily gather information about overused words in their own song as long as they upload its lyrics on Genius',

    description:
      "Web app using Natural Language Processing to analyze sentiment of song's lyrics. Beginner-level artists and musicians might find the app interesting" +
      'since they can easily gather information about overused words in their own song as long as they upload its lyrics on Genius. They can make sure' +
      "that the song's vibe based on lyrics is indeed as it was planned. RapAnalyzer might be also used by casual users who just wants to have fun doing research" +
      'about songs they recently liked. I plan to develop the application further by adding various features i.e generating stats on set of songs, doing rhyme analysis etc',

    myAchievements: [
      'Implemented game logic – moving, aiming and shooting, fighting system, scores. Developed dynamic, real-time rendering using P5.js & WebSockets.',
      'Created a microservice Node.js/Express/Socket.io game server to manage game flow and communicate with both Spring backend app (via REST API) and front app (sockets).',
      'As my team was focused on Java/Spring part of the app, I conducted meetings to discuss available solutions, architecture and to ensure efficient workflow ',
    ],
    techStack: [
      'Natural.js',
      'React.js',
      'Node.js & Express.js',
      'TypeScript',
      'react-vis',
      'SCSS',
      'AntDesign',
    ],
    photos: [
      {
        original: rap1,
        thumbnail: rap1th,
      },
      {
        original: rap2,
        thumbnail: rap2th,
      },
      {
        original: rap3,
        thumbnail: rap3th,
      },
    ],
    github: '',
    deployedAt: '',
    addictionalInfo: '',
  },
  {
    name: 'Microblog',
    descriptionShort:
      'Custom microblog allowing people to create their own blog posts with rich-text editor and comment others. Each post can have multiple co-authors. You can add hashtags to your blog post in order to make it easier to find. ' +
      'The project is in progress as I am rewriting API and re-designing frontend ',
    description:
      'Custom microblog allowing people to create their own blog posts and comment others. Each post can have multiple co-authors. You can add hashtags to your blog post in order to make it easier to find',
    myAchievements: [
      'Implemented game logic – moving, aiming and shooting, fighting system, scores. Developed dynamic, real-time rendering using P5.js & WebSockets.',
      'Created a microservice Node.js/Express/Socket.io game server to manage game flow and communicate with both Spring backend app (via REST API) and front app (sockets).',
      'As my team was focused on Java/Spring part of the app, I conducted meetings to discuss available solutions, architecture and to ensure efficient workflow ',
    ],
    techStack: ['React.js', 'Draft.js', 'SCSS', 'REST API'],
    photos: [
      {
        original: blog1,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: blog2,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: blog3,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
    ],
    github: '',
    deployedAt: '',
    addictionalInfo: 'In progress',
  },
  {
    name: 'Minidzira',
    descriptionShort:
      'Web app with 2 CRUDs - projects and task for each project. Bunch of nice Razor/bootstrap views. Authentication with 2 roles - admin/user. Could be used as a todo list for a dev team or small organisation. Or... idk :) I was just having fun with ASP.NET',
    description:
      'Custom microblog allowing people to create their own blog posts and comment others. Each post can have multiple co-authors. You can add hashtags to your blog post in order to make it easier to find',
    myAchievements: [
      'Implemented game logic – moving, aiming and shooting, fighting system, scores. Developed dynamic, real-time rendering using P5.js & WebSockets.',
      'Created a microservice Node.js/Express/Socket.io game server to manage game flow and communicate with both Spring backend app (via REST API) and front app (sockets).',
      'As my team was focused on Java/Spring part of the app, I conducted meetings to discuss available solutions, architecture and to ensure efficient workflow ',
    ],
    techStack: ['ASP.NET', 'Razor', 'MSSQL', 'SSR'],
    photos: [
      {
        original: dzira1,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: dzira2,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: dzira3,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
    ],
    github: '',
    deployedAt: '',
    addictionalInfo: 'In progress',
  },
];
