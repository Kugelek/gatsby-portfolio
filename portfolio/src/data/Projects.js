import testimg from '../images/code2.jpg'

export const Projects = [
  {
    name: 'TeamShips.io',
    descriptionShort:
      'A multiplayer online web game. Players are fighting each other ' +
      'in space as warships. They can shoot down their foes or trap them with use of deadly mines. In order to gain advantage over your enemies, ' +
      'you can gain points by destroying metheors (yellow dots',
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
      'Node.js/Express.js',
      'Thymeleaf',
      'Spring/Hibernate/SpringSecurity',
      'PostgreSQL',
      'Docker',
    ],
    photos: [
      {
        // original: '../../images/projectsImages/0.png',
        original: testimg,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
    github: '',
    deployedAt: '',
  },
  {
    name: 'TeamShips.io',
    descriptionShort:
      'A multiplayer online web game. Players are fighting each other ' +
      'in space as warships. They can shoot down their foes or trap them with use of deadly mines. In order to gain advantage over your enemies, ' +
      'you can gain points by destroying metheors (yellow dots',
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
      'Node.js/Express.js',
      'Thymeleaf',
      'Spring/Hibernate/SpringSecurity',
      'PostgreSQL',
      'Docker',
    ],
    photos: [
      {
        // original: '../../images/projectsImages/0.png',
        original: testimg,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
    ],
    github: '',
    deployedAt: '',
  },
]
