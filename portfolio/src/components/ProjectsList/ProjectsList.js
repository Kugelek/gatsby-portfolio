import React from 'react'

import './ProjectsList.modules.scss'
import { Projects } from '../../data/Projects'
import ProjectItem from './ProjectItem'
// const projects = [
//     {
//         name: "TeamShips.io",
//         descritpionShort: "A multiplayer online web game. Players are fighting each other "+
//         "in space as warships. They can shoot down their foes or trap them with use of deadly mines. In order to gain advantage over your enemies, "+
//         "you can gain points by destroying metheors (yellow dots",
//         description: "Team project for my programming classes at the University of Gdansk. It's a multiplayer online web game. Players are fighting each other "+
//          "in space as warships. They can shoot down their foes or trap them with use of deadly mines. In order to gain advantage over your enemies, "+
//          "you can gain points by destroying metheors (yellow dots). Your personal record is saved after death in our database and you're able to start from scratch"+
//          "TeamShips.io uses Node.js microservice server to handle all the crucial operations with WebSockets in order to prevent client-side cheating",
//         myAchievements: [
//          "Implemented game logic – moving, aiming and shooting, fighting system, scores. Developed dynamic, real-time rendering using P5.js & WebSockets.",
//             "Created a microservice Node.js/Express/Socket.io game server to manage game flow and communicate with both Spring backend app (via REST API) and front app (sockets).",
//             "As my team was focused on Java/Spring part of the app, I conducted meetings to discuss available solutions, architecture and to ensure efficient workflow ",
//         ],
//         techStack:[
//             "P5.js","Socket.io","Node.js/Express.js","Thymeleaf","Spring/Hibernate/SpringSecurity", "PostgreSQL","Docker"
//         ],
//         images: [],
//         thumbnails: [],
//         github: "",
//         deployedAt:"",

//     },{

//     }
// ];
// const images = [
//     {
//         // original: '../../images/projectsImages/0.png',
//         original: 'static/0.png',
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',

//       },
//       {
//         original: 'https://picsum.photos/id/1015/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',

//       },
//       {
//         original: 'https://picsum.photos/id/1019/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',

//       },
// ]
const ProjectsList = () => {
  return (
    <main className="projects">
      <h1 className="projects__title">
        Let's see some projects I've been developing!
      </h1>
      <ul className="projects__list">
        {Projects.map((projData) => (
          <ProjectItem projectData={projData} photos={projData.photos} />
        ))}
      </ul>
    </main>
  )
}

export default ProjectsList
