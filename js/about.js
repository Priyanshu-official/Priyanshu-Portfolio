var aboutContainer = document.querySelector('.about')

var aboutcontent = [
    {
        intro:'I am learner while doing things in a Practical Way and Open Source Enthusiast. I am keen and very willing to learn and develop new skills.  Seeking a challenging position in a growth-oriented environment  where I can expand and utilise my learning and skills so that I can contribute towards organisation goals and establish a career for myself.',
   
    }
]

function displayAbout(){
    // console.log('running');
    let output = ''
    aboutcontent.forEach(({intro}) => {
        output += `<div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-full overflow-hidden">
      <img alt="feature" class="object-cover object-center" src="./assest/giphy.gif">
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="flex-grow">
          <h1 id='font' class="color1 title-font sm:text-2xl text-3xl text-gray-900 text-lg title-font font-medium text-center">About</h1>
          <h1 id='font' class="color1 title-font sm:text-4xl text-3xl text-lg title-font font-medium text-center mb-4">Let me introduce myself</h1>
          <p id='font' class="leading-relaxed text-base text-justify text-white " style="font-size: x-large;">${intro}</p>
        </div>
      </div>
      <h1 id='font' class="color1 title-font sm:text-3xl text-3xl text-lg title-font font-medium text-center border-b rounded-lg border-blue-500">Tools Which I Use </h1>
      <div class="flex justify-center mt-8">
        <a class="inline-flex focus:outline-none"><img src="./assest/wind_linux.png" alt="github" style="height:90px;"></a>

        <a class="inline-flex focus:outline-none"><img src="./assest/vs_code.png" alt="Linkdin" style="height:80px;"></a>
        
        <a class="ml-4 inline-flex focus:outline-none "><img src="./assest/Github_colord.png" alt="Instagram" style="height:70px;"></a>
        
        <a class="ml-4 inline-flex focus:outline-none "><img src="./assest/slack.png" alt="Twitter" style="height:70px;"></a>

        <a class="ml-4 inline-flex  focus:outline-none "><img src="./assest/discord.png" alt="Twitter" style="height:80px;"></a>
      </div>
    </div>
  </div>`
    })
    

  aboutContainer.innerHTML = output
}

document.addEventListener('DOMContentLoaded', displayAbout);