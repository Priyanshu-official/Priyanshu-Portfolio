var projectContainer = document.querySelector(".projectCard");

var Card = [
    {
        title: "Project-Zone",
        tag: "MERN Stack",
        img: "./assest/Project-Zone.png",
        desc: `Web-app suggests the user about the projects they can create based on their skills. And Show Case in HackOn
        Hackathon 2.0. Worked as Front-end in Team. Tech Stack- React, Elastic Search, Magic for auth.`,
        github: "https://github.com/Priyanshu-official/project-zone",
        link: "https://project-zone.netlify.app/"
    },
    {
        title: "JavaScript-Project-Zone",
        tag: "MERN Stack | RestAPI",
        img: "./assest/projectIMG.png",
        desc: `This Project Aim to encourage people to show case there Project whether small or Big. Also help to start Open-Source Journey`,
        github: "https://github.com/Priyanshu-official/JavaScript-Project-Zone",
        link: "https://js-project-zone.netlify.app/"
    },
    {
        title: "Instagram Automation",
        tag: "NodeJS",
        img: "https://media.sproutsocial.com/uploads/2017/05/Instagram-Automation.png",
        desc: `Created script using Node.js and Puppeteer to automate Instagram. Which Helps to like Multiple posts in Single
        Tap.`,
        github: "https://github.com/Priyanshu-official/Automation-tools",
        link: "https://www.awesomescreenshot.com/video/3201740?key=3708eac96ab77405f80cd2e1b0abe8a5"
    },
    {
        title: "Quiz CLI",
        tag: "NodeJS | CLI",
        img: "https://www.elegantthemes.com/blog/wp-content/uploads/2021/03/featured-wordpress-quiz-plugins.png",
        desc: `Quiz Question Is related To The Avengers Movie and Higher Score will be Mentioned In Leader Board. Learned About NodeJS `,
        github: "https://github.com/Priyanshu-official/Camp_Project/blob/main/quiz.js",
        link: "https://replit.com/@Priyanshu87/QuizCLI#index.js?embed=1&output=1"
    },

]


function displayCard() {
    let output = ""
    Card.forEach(({title, img, desc, tag, github, link}) =>{
        output += ` <div id="glass" class="xl:w-2/5 md:w-1/2 p-4 m-2 mx-auto ">
        <div class="rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src=${img} alt="content"/>
          <h2 id="font1" class="color1 text-lg text-white font-medium title-font">${title}</h2>
          <h3 id="font1" class="tracking-widest text-blue-500 text-sm font-medium title-font mb-4">${tag}</h3>
          <p id="font1" class="leading-relaxed text-lg text-white">${desc}</p>
        </div>
        <div class="inline-flex p-2 w-full">
              <a href=${github} target="_blank"><button class="btn-glass flex text-white py-2 px-8 mt-2 focus:outline-none hover:text-blue-500 rounded-lg text-lg">Github</button>
               </a>
               <a href=${link} target="_blank"><button class="btn-glass flex text-white py-2 px-8 mt-2 focus:outline-none hover:text-blue-500 rounded-lg text-lg ml-2">Live</button>
               </a>
          </div>
      </div>`
    })
    projectContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", displayCard);























