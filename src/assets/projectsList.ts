//All the info used to display projects

const projectList = [
    {
        title: 'Chestnut Preschool Website',
        img: {
            src: '/assets/images/chestnut.png',
            alt: 'chestnut'
        },
        github: '',
        link: 'https://chestnutpreschool.com/',
        desc: 'I developed the Chestnut Preschool website using React, creating a dynamic and user-friendly interface tailored to the client’s needs. Throughout the project, I worked closely with the client to understand their vision and requirements, ensuring the final product accurately represented the preschool\'s values and brand. My responsibilities included building responsive layouts, integrating interactive elements, and optimizing the site for both performance and accessibility. By maintaining open communication and adapting to feedback, I delivered a polished website that effectively serves the preschool\'s community and enhances their online presence.',
        techList: ['react', 'javascript', 'html', 'css']
    },
    {
        title: 'Filmstack Website',
        img: {
            src: '/assets/images/filmstack.png',
            alt: 'filmstack'
        },
        github: 'https://github.com/DavidLee36/film-stack',
        link: 'https://filmstack.io/',
        desc: 'I built the Filmstack website using React, focusing on delivering a seamless and engaging user experience for movie enthusiasts. A key feature of the site is its ability to filter and search movies efficiently, powered by data from the TMDB (The Movie Database) API. I implemented robust search and filter functionalities that allow users to easily explore and discover movies based on various criteria. This project involved integrating the TMDB API, handling dynamic data, and optimizing the site for performance and responsiveness. Working independently, I took charge of the full development process, from initial concept to deployment, ensuring a polished and user-friendly platform.',
        techList: ['react', 'javascript', 'html', 'css']
    },
    {
        title: 'Overwatch Counters Website',
        img: {
            src: '/assets/images/overwatch.png',
            alt: 'overwatch'
        },
        github: 'https://github.com/DavidLee36/OverwatchCountersCalculator',
        link: 'https://bestoverwatchcounters.com/',
        desc: 'I developed the Overwatch Counters Calculator, a tool designed to help players identify the most effective counters against enemy teams in Overwatch. The calculator allows users to input the entire enemy team or any number of enemies, and it uses an advanced algorithm to suggest the optimal counter picks. This algorithm not only evaluates how well a character counters specific enemies but also considers how ineffective the counter pick is against the rest of the enemy team, providing a more reliable and strategic recommendation. The project highlights my ability to implement complex logic and create valuable resources that enhance strategic gameplay for the Overwatch community.',
        techList: ['javascript', 'html', 'css']
    },
    {
        title: 'Robotic Bartender',
        img: {
            src: '/assets/images/bartender.png',
            alt: 'bartender'
        },
        github: 'https://github.com/DavidLee36/DrinkMixer',
        link: '',
        desc: 'I built a Robot Drink Mixer that automates making custom drinks through a Node.js web server running on a Raspberry Pi. Users can visit the website at sleepyjoesaloon.com to place drink orders, which are sent to the Raspberry Pi acting as the middleman between the website and an Arduino Uno R4. The Raspberry Pi communicates with the Arduino to control relays and pumps, dispensing precise amounts of liquid from various bottles into a cup. I also developed a custom API that displays the current drink options available to users. This project showcases my skills in IoT, web development, and hardware integration, creating a seamless and interactive experience from the web interface to the physical drink mixer.',
        techList: ['react', 'javascript', 'node', 'arduino', 'raspberry']
    },
    {
        title: 'Valorant Airsoft Gun Project',
        img: {
            src: '/assets/images/airsoft.jpg',
            alt: 'airsoftGun'
        },
        github: 'https://github.com/DavidLee36/ValoAirsoftGun',
        link: '',
        desc: 'I built a unique Valorant Airsoft Gun system that automatically shoots me whenever I get shot in the game, adding an intense level of immersion to gameplay. This project utilizes Python with the OpenCV (cv2) library to continuously analyze the Valorant game feed in real-time, detecting when I take damage. The system is integrated with an Arduino, connected via Bluetooth, which controls the airsoft gun. When damage is detected, the Arduino triggers the gun to fire, synchronizing in-game events with physical feedback. This project showcases my skills in computer vision, real-time data processing, and hardware integration, blending software and electronics to create a dynamic, interactive experience.',
        techList: ['python', 'arduino']
    },
]

export default projectList;