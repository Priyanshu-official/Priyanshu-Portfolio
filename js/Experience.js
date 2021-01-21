// main Container as data will added
var experienceContainer = document.querySelector('.Experience')

// array containig data Card view
var experienceCard = [
    {
        title: 'Web-Developer Intern | careerguide.com',
        desc:'',
        date: 'October 2020 - December 2020 ',
        Tool: 'Tool Used: Wordpress'
    },
    {
        title: 'Web Developer | Verzeo',
        desc:'',
        date: 'December 2019 - January 2020 ',
        Tool: 'Tool Used: HTML, CSS, JS, Django'
    },
    {
        title: 'Hacktoberfest | Open Source | 2020',
        desc:'Successful 4 PR ',
        date: '',
        Tool: ''
    },
    {
        title: 'GeeksforGeeks | Open Source Competition | 2020',
        desc:'Third Position @ Game of Source all over India',
        date: '',
        Tool: ''
    },

]

function displaycard(){
    console.log('ok');
    let output = ""
    experienceCard.forEach(({title ,desc,date, Tool}) =>{
        output += `<div class="xl:w-1/2 md:w-1/2 p-4 ">
        <div class="border border-gray-300 p-6 rounded-lg transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-11">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 class="text-lg text-white font-medium title-font mb-2">${title}</h2>
          <p class="leading-relaxed text-gray-200 text-base">${desc}${date}<br>${Tool}</p>
        </div>
      </div>`
    
    })
    //  adding content to the container
    experienceContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", displaycard);