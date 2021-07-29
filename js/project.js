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
        tag: "MERN Stack | API",
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
          <h1 id="font1" class="color1 text-2xl text-white font-medium title-font">${title}</h1>
          <h3 id="font1" class="tracking-widest text-blue-500 text-sm font-medium title-font mb-4">${tag}</h3>
          <p id="font1" class="leading-relaxed text-lg text-white">${desc}</p>
        </div>
        <div class="inline-flex p-2 w-full">
              <a href=${github} target="_blank"><button class="btn-glass flex text-white py-2 px-8 mt-4 focus:outline-none hover:text-blue-500 border-white border-2 border-opacity-25 hover:border-blue-500 rounded-lg text-lg ml-2 nr-2">Github
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-5 h-6  ml-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
              </button>
               </a>
               <a href=${link} target="_blank"><button class="btn-glass flex text-white py-2 px-8 mt-4 focus:outline-none hover:text-blue-500 border-white border-2 border-opacity-25 hover:border-blue-500 rounded-lg text-lg ml-2 mr-2">Live
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></button>
               </a>
          </div>
      </div>`
    })
    projectContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", displayCard);























