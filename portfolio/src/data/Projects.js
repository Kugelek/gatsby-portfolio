import rap1 from '../images/projectsImages/rap1.png';
import rap2 from '../images/projectsImages/rap2.png';
import rap3 from '../images/projectsImages/rap3.png';

import rap1th from '../images/projectsThumbnails/rap1th.png';
import rap2th from '../images/projectsThumbnails/rap2th.png';
import rap3th from '../images/projectsThumbnails/rap3th.png';

import ships1 from '../images/projectsImages/ships1.jpg';
import ships2 from '../images/projectsImages/ships2.png';
import ships3 from '../images/projectsImages/ships3.gif';

import ships1th from '../images/projectsThumbnails/ships1th.jpg';
import ships2th from '../images/projectsThumbnails/ships2th.png';
import ships3th from '../images/projectsThumbnails/ships3th.gif';

import blog1 from '../images/projectsImages/blog1.png';
import blog2 from '../images/projectsImages/blog2.png';
import blog3 from '../images/projectsImages/blog3.png';

import blog1th from '../images/projectsThumbnails/blog1th.png';
import blog2th from '../images/projectsThumbnails/blog2th.png';
import blog3th from '../images/projectsThumbnails/blog3th.png';

import dzira1 from '../images/projectsImages/dzira1.png';
import dzira2 from '../images/projectsImages/dzira2.png';
import dzira3 from '../images/projectsImages/dzira3.png';

import dzira1th from '../images/projectsThumbnails/dzira1th.jpg';
import dzira2th from '../images/projectsThumbnails/dzira2th.jpg';
import dzira3th from '../images/projectsThumbnails/dzira3th.jpg';
//TODO: there's another more gatsby-oriented way to import imgs. Its fine for now but gonna be mess if u develop
//this section further

export const Projects = [
  {
    name: 'TeamShips.io',
    descriptionShort:
      'A multiplayer online web game. Players are fighting each other ' +
      'in space as warships. Shoot down your foes or trap them with use of deadly mines! In order to exceed your enemies, ' +
      'you can destroy valuable metheors and acquire points',
    description1:
      "Team project . It's a multiplayer online web game. Players are fighting each other " +
      'in space as warships. They can shoot down their foes or trap them with use of deadly mines.',
    description2:
      "Your personal record is saved after death in our database and you're able to start from scratch. " +
      'TeamShips.io uses Node.js microservice server to handle all the crucial operations with WebSockets in order to prevent client-side cheating.',
    myAchievements: [
      'Implemented game logic – moving, aiming and shooting, fighting system, scores',
      'Developed dynamic, real-time rendering using P5.js & WebSockets.',
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
        thumbnail: ships1th,
      },
      {
        original: ships2,
        thumbnail: ships2th,
      },
      {
        original: ships3,
        thumbnail: ships3th,
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
      'since they can easily gather information about overused words in their own songs ',

    description1:
      "Web app using Natural Language Processing to analyze sentiment of song's lyrics. Beginner-level artists and musicians might find the app interesting" +
      'since they can easily gather information about overused words in their own song as long as they upload its lyrics on Genius. They can make sure' +
      "that the song's vibe based on lyrics is indeed as it was planned.",
    description2:
      'RapAnalyzer might be also used by casual users who just wants to have fun doing research' +
      'about songs they recently liked. I plan to develop the application further by adding various features i.e generating stats on set of songs, doing rhyme analysis etc',

    myAchievements: [
      'Implemented sentiment analysis (Natural.js) and various text parsing operations to organise data of a song lyrics fetched from Genius API.',
      'Designed and coded convenient UI using React.js, AntDesign and react-vis charts',
      'Built Express.js REST API and connected it to frontend React app ',
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
    github: 'https://github.com/Kugelek/rapanalyzer',
    deployedAt: '',
    addictionalInfo: '',
  },
  {
    name: 'Microblog',
    descriptionShort:
      'Custom microblog allowing people to create blog posts with rich-text editor and comment other posts. Each post can have multiple co-authors. You can add hashtags to your blog post in order to make it easier to find. ' +
      'The project is in progress as I am rewriting API and re-designing frontend ',
    description1:
      'Custom microblog allowing people to create blog posts with rich-text editor and comment other posts. Each post can have multiple co-authors.' +
      'You can add hashtags to your blog post in order to make it easier to find. ',
    description2:
      'The app provides an admin role with permissions to moderate all blog posts and comments. ',
    myAchievements: [
      'Implemented basic registration, creating and managing posts and comments, admin and user roles. ',
      'Designed and implemented React frontend app integrated with REST API, password strength meter, searchbars and filtering options.',
      'Developed rich text editor using Draft.js and HTML parsers',
    ],
    techStack: ['React.js', 'Draft.js', 'SCSS', 'REST API'],
    photos: [
      {
        original: blog1,
        thumbnail: blog1th,
      },
      {
        original: blog2,
        thumbnail: blog2th,
      },
      // {
      //   original: blog3,
      //   thumbnail: blog3th,
      // },
    ],
    github: 'https://github.com/Kugelek/microblog',
    deployedAt: '',
    addictionalInfo: 'In progress',
  },
  {
    name: 'Minidzira',
    descriptionShort:
      'Web app with 2 CRUDs - projects and task for each project. Bunch of nice Razor/bootstrap views. Authentication with 2 roles - admin/user. Could be used as a todo list for a dev team or small organisation.',
    description1:
      'Web app with 2 CRUDs - projects and task for each project. Bunch of nice Razor/bootstrap views. Authentication with 2 roles - admin/user. Could be used as a todo list for a dev team or small organisation',
    myAchievements: [
      'Created 2 CRUDs with ASP.NET',
      'Modified built-in ASP authentication by adding admin role to the app. ',
      'Created simple views with HTML+CSS',
    ],
    techStack: ['ASP.NET', 'Razor', 'MSSQL', 'SSR'],
    photos: [
      {
        original: dzira1,
        thumbnail: dzira1th,
      },
      {
        original: dzira2,
        thumbnail: dzira2th,
      },
      {
        original: dzira3,
        thumbnail: dzira3th,
      },
    ],
    github: '',
    deployedAt: '',
    addictionalInfo: '',
  },
];
