TRUNCATE project_links, projects RESTART IDENTITY CASCADE;

INSERT INTO projects (project, img_path, bio) VALUES
(
  'Game Tracker',
  '/imgs/fullstack.png',
  'This is a full stack website using PREN build. The front end leverages REACT, HTML, CSS, and JavaScript to deliver a fast, responsive, and dynamic user experience, while the back end is powered by Express.js to handle server-side logic and API interactions.'
),
(
  'Current Personal Website',
  '/imgs/CurrentWP.png',
  'This personal website is built using a modern full-stack JavaScript approach. The front end leverages Vite, HTML, CSS, and JavaScript to deliver a fast, responsive, and dynamic user experience, while the back end is powered by Express.js to handle server-side logic and API interactions.'
),
(
  'Anime Browser',
  '/imgs/AnimeBrowser.png',
  'Anime Browser built with vanilla JavaScript (ES6+) that allows users to search for anime titles and view detailed information in a dynamic modal interface.This project focuses on strengthening core front-end fundamentals without using frameworks.'
),
(
  'Black Jack',
  '/imgs/BlackJack.png',
  'For this solo project, I built a command-line Blackjack game using JavaScript, applying object-oriented programming with classes and synchronous prompts for user interaction. The game simulates real Blackjack logic, including dealing cards, calculating scores, and handling player decisions. This project helped me deepen my understanding of classes, game state management, and control flow while building a fully interactive experience'
),
(
  'First Static Website',
  '/imgs/firstWebsite.png',
  'For this solo project, I built a personal portfolio website from scratch using HTML and CSS. The site showcases my skills, projects, and personality while giving me hands-on experience with responsive design and real-world web development. Through this project, I strengthened my understanding of layout, styling, and problem-solving, and created a portfolio I can continue to grow as I advance in my career.'
),
(
  'Sample Hotel Reservations (Java)',
  '/imgs/JavaHotelRes.png',
  'In this project, I worked in a pair to build a Java console application that consumes a RESTful API to manage hotel reservations. We implemented functionality to add, update, and delete reservations using Spring''s RestTemplate with POST, PUT, and DELETE requests. The project emphasized creating HTTP entities, handling API errors through exception handling and logging, and debugging REST interactions. Collaborating with a partner helped strengthen my understanding of RESTful services and real-world backend communication.'
),
(
  'Rock Paper Scissors Command Line Interface',
  '/imgs/RPSCLI.png',
  'CLI Rock-Paper-Scissors is a command-line game that emulates the feel of classic arcade-style games. It features simple controls, fast gameplay, and clear win/lose logic, focusing on user interaction and game flow without a graphical interface. The project highlights core programming concepts like input handling, game state management, and conditional logic—all wrapped in a retro, emulator-inspired experience.'
);

INSERT INTO project_links (project_id, type, url) VALUES
(1, 'GitHub',   'https://github.com/The-Marcy-Lab-School-Assignments/full-stack-project-remix-gjromero6906'),
(1, 'LiveLink', 'https://full-stack-project-remix-gjromero6906.onrender.com'),
(2, 'GitHub',   'https://github.com/gjromero6906/personal-website'),
(2, 'LiveLink', 'https://guadalupejromero.onrender.com'),
(3, 'GitHub',       'https://github.com/Guadalupe-Ian-mls/mod-4-Project'),
(3, 'LiveLink',     'https://guadalupe-ian-mls.github.io/mod-4-Project/'),
(3, 'Presentation', 'https://docs.google.com/presentation/d/1kNYsEEEL-sjjHad9OKM4ipTB836zWQmq5zkIj-o3A1w/edit?usp=sharing'),
(4, 'GitHub', 'https://github.com/gjromero6906/BlackJack'),
(5, 'GitHub', 'https://github.com/gjromero6906/GuadalupeRomero.github.io'),
(6, 'GitHub', 'https://github.com/gjromero6906/Consuming_RESTful_APIs_Part_2'),
(7, 'GitHub', 'https://github.com/gjromero6906/Mod-1-Project-Week');
