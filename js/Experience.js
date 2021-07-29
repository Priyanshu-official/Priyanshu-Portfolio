// main Container as data will added
var experienceContainer = document.querySelector('.Experience')

// array containig data Card view
var experienceCard = [
    {
        title: 'Web-Developer',
        company: 'Divergent Infoconnect',
        date: 'Oct 2020- April 2021',
        desc: `➔ Developed Company Website & Deployed on server, Worked on more 2 project i.e Portfolio, Divergentlly. <br>
        ➔ Also launched New service i.e Web development service. Learned new technology like CMS (WordPress), Web
        Scraping, Hosting Website`
    },
    {
      title: 'WordPress Developer',
      company: 'Careerguide.com',
      date: 'Oct 2020 - Nov 2020',
      desc: `➔ I Worked with the CEO & developer team and got an opportunity to help new Interns. <br>
      ➔ Worked on a new Business Idea i.e Become A Psychometric Partner & Earn With CareerGuide .`
  },    {
    title: 'Participant',
    company: 'Script Winter of Code (SWOC)',
    date: 'Jan 2021 - Mar 2021',
    desc: `➔ Contributed and Collaborated in OpenSource Projects Amazing-Python-Scripts, Awesome Portfolio Websites,
    Idea Lab.`
},

]

function displaycard(){
    // console.log('ok');
    let output = ""
    experienceCard.forEach(({title ,desc,date,company}) =>{
        output += `
        <li class="event">
        <div class="inline-flex">
            <h3 class="color1 sm:text-base text-xs">${title}</h3><span class="border-l-2 border-blue-500 ml-1"></span> <span class="sm:text-base text-xs ml-2 " id="color3"> ${company}</span>
        </div>
          <p >${desc}</p>
          <p class="month">${date}</p>
        </li>`
    
    })
    //  adding content to the container
    experienceContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", displaycard);