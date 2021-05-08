var skillContainer = document.querySelector('.Skillcard')

// Adding array to collect data

var skillcard = [
    
    {
        title:'C++',
        img:'assest/cplus.png'
    },

    {
        title:'Python',
        img:'assest/python.png'
    },
    
    {
        title:'React',
        img:'assest/react.png'
    },
    
    {
        title:'Django',
        img:'assest/django-logo.png'
    },
    
    {
        title:'Web-Development',
        img:'assest/html_css_js.png'
    },
    
    {
        title:'Open-Source Contributation',
        img:'assest/github_C.svg'
    },
    
]

function displaycard(){
    // console.log('running');
    let output = ""
    skillcard.forEach(({title, img}) =>{
        output += `<div class="p-2 lg:w-1/2 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="${img}">
          <div class="flex-grow">
            <h2 id='font' class="text-white title-font font-medium">${title}</h2>
          </div>
        </div>
      </div>`
    })

    skillContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", displaycard);