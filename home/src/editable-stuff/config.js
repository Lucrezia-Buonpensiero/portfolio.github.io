// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Lucrezia",
  middleName: "",
  lastName: "Buonpensiero",
  message: "\"Talk is cheap. Show me the code.\" - Linus Torvald",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Lucrezia-Buonpensiero",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/buonpensierolucrezia",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/johnDoe.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/lb.jpg"),
  imageSize: 375,
  message:
    "My name is Lucrezia Buonpensiero. I’m a graduate of 2024 from University of Modena and Reggio Emilia - UNIMORE with a degree in Computer Science. I have a deep passion for technology, always eager to learn and apply new skills in real-world projects. Currently, I work as a Software Engineer and AI Solution Developer, where I develop customized software solutions and research AI applications for technical documentation. I thrive in collaborative environments and enjoy solving complex problems with innovative approaches. In my free time, I explore my passions for graphic design, music, and martial arts, particularly Judo, whose principles shape my professional and personal mindset.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Lucrezia-Buonpensiero", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/lb.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/lb.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "Java", value: 80 },
    { name: "C/C++", value: 65 },
    { name: "SQL", value: 65 },
    { name: "Data Structures", value: 80 },
    { name: "JavaScript", value: 50 },
    { name: "HTML/CSS", value: 60 },
    { name: "MATLAB", value: 20 },
    { name: "Bootstrap", value: 60 },
    { name: "Django", value: 60 },
    { name: "Flask", value: 40 },
    { name: "Java SpringBoot", value: 60 },
  ],
  oS: [
    { name: "Debian Based", value: 80 },
    { name: "Arch Based", value: 60 },
    { name: "Windows", value: 75 },
    { name: "Docker", value: 40 },
    { name: "Eclipse", value: 60 },
    { name: "Pycharm", value: 60 },
    { name: "Git", value: 60 },
  ],
  softSkills: [
    { name: "Adaptability", value: 90 },
    { name: "Collaboration & Teamwork", value: 85 },
    { name: "Positivity", value: 85 },
    { name: "Continuos Learning", value: 95 },
    { name: "Problem Solving", value: 90 },
    { name: "Time Management & Organization", value: 80 },
    { name: "Discipline & Determination", value: 95 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time opportunities in Software Development, ERP Customization, or AI Research & Development. With experience in end-to-end software engineering, database management, and AI-driven solutions, I'm eager to apply my skills to innovative and challenging projects. If you know of any opportunities, have any questions, or just want to connect, feel free to email me at",
  email: "buonpensierolucrezia@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: '2023 – Present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
