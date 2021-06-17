var aboutContainer = document.querySelector('.about')

var aboutcontent = [
    {
        intro:`My name is Priyanshu. I'm a Front-end Developer from 🇮🇳 . I'm an open-source enthusiast & a quick learner. 
               I love to contribute to Open Source Projects and Communities. <br> I am keen and very willing to learn and develop new skills.
               Seeking a challenging position in a growth-oriented environment where I can expand and utilize my learning and skills so 
               that I can contribute towards organizational goals and establish a career for myself. `,
   
    }
]

function displayAbout(){
    // console.log('running');
    let output = ''
    aboutcontent.forEach(({intro}) => {
        output += `<div id="glass" class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="mb-10 lg:mb-0 mt-6">
      <img alt="feature" class="object-cover object-center rounded" src="./assest/giphy.gif">
      <img class="mt-4" src="https://github-readme-stats.vercel.app/api?username=Priyanshu-official&show_icons=true&locale=en&count_private=true&hide_border=true" alt="priyanshu-official" />
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="flex-grow">
          <h1 id='font1' class="color1 title-font sm:text-4xl text-3xl text-lg title-font font-medium text-center mb-4  border-l-2 border-blue-500">About Me</h1>
          <p id='font1' class="leading-relaxed text-base text-justify text-white " style="font-size: x-large;">${intro}</p>
        </div>
      </div>
    </div>
  </div>`
    })
    

  aboutContainer.innerHTML = output
}

document.addEventListener('DOMContentLoaded', displayAbout);