////////////////////////
// In-Memory Database
////////////////////////


// Increments and returns a unique id each time it is called.
let id = 1;
const getId = () => id++;

// Seed data — do not remove
const projects = [
    { id: getId(), project: 'Current Personal Website', imgPath: "/imgs/CurrentWP.png", bio: 'This personal website is built using a modern full-stack JavaScript approach. The front end leverages Vite, HTML, CSS, and JavaScript to deliver a fast, responsive, and dynamic user experience, while the back end is powered by Express.js to handle server-side logic and API interactions.',gitHub:'https://github.com/gjromero6906/personal-website',liveLink:''},
    { id: getId(), project: 'Anime Browser', imgPath: "/imgs/AnimeBrowser.png",bio: 'Anime Browser built with vanilla JavaScript (ES6+) that allows users to search for anime titles and view detailed information in a dynamic modal interface.This project focuses on strengthening core front-end fundamentals without using frameworks.',gitHub:'https://github.com/Guadalupe-Ian-mls/mod-4-Project',liveLink:'https://guadalupe-ian-mls.github.io/mod-4-Project/'},
    { id: getId(), project: 'Black Jack', imgPath: "/imgs/BlackJack.png",bio: 'For this solo project, I built a command-line Blackjack game using JavaScript, applying object-oriented programming with classes and synchronous prompts for user interaction. The game simulates real Blackjack logic, including dealing cards, calculating scores, and handling player decisions. This project helped me deepen my understanding of classes, game state management, and control flow while building a fully interactive experience',gitHub:'https://github.com/gjromero6906/BlackJack'},
    { id: getId(), project: 'First Static Website', imgPath: "/imgs/firstWebsite.png", bio: 'For this solo project, I built a personal portfolio website from scratch using HTML and CSS. The site showcases my skills, projects, and personality while giving me hands-on experience with responsive design and real-world web development. Through this project, I strengthened my understanding of layout, styling, and problem-solving, and created a portfolio I can continue to grow as I advance in my career.',gitHub:'https://github.com/gjromero6906/GuadalupeRomero.github.io'},
    { id: getId(), project: 'Sample Hotel Reservations (Java)', imgPath: "/imgs/JavaHotelRes.png",bio: 'In this project, I worked in a pair to build a Java console application that consumes a RESTful API to manage hotel reservations. We implemented functionality to add, update, and delete reservations using Spring’s RestTemplate with POST, PUT, and DELETE requests. The project emphasized creating HTTP entities, handling API errors through exception handling and logging, and debugging REST interactions. Collaborating with a partner helped strengthen my understanding of RESTful services and real-world backend communication.',gitHub:'https://github.com/gjromero6906/Consuming_RESTful_APIs_Part_2'},
    { id: getId(), project: 'Rock Paper Scissors Command Line Interface', imgPath: "/imgs/RPSCLI.png",bio: 'CLI Rock-Paper-Scissors is a command-line game that emulates the feel of classic arcade-style games. It features simple controls, fast gameplay, and clear win/lose logic, focusing on user interaction and game flow without a graphical interface. The project highlights core programming concepts like input handling, game state management, and conditional logic—all wrapped in a retro, emulator-inspired experience.',gitHub:'https://github.com/gjromero6906/Mod-1-Project-Week'},
];

module.exports.list = () => {
  return [...projects];
};

module.exports.find = (id) => {
  const project = projects.find((project) => project.id === Number(id));
  if (!project) {
    return null;
  }
  return { ...project };
};