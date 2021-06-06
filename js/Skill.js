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
        title:'JavaScript',
        img:'assest/javascript.png'
    },
    
    {
        title:'React',
        img:'assest/react.svg'
    },
    
    {
        title:'Django',
        img:'assest/django-logo.svg'
    },
    
    {
        title:'HTML & CSS',
        img:'assest/html-logo.png'
    },
    
    {
        title:'GitHub',
        img:'assest/github_C.svg'
    },
    {
        title:'Netlify',
        img:'assest/netlify-icon.svg'
    },
    
]

function displaycard(){
    // console.log('running');
    let output = ""
    skillcard.forEach(({title, img}) =>{
        output += `<div class="p-2  md:w-1/3 w-1/2 ">
        <div class="h-full flex items-center border-gray-200 p-4 ">
          <img class="w-12 h-12 object-contain object-center   mr-4" src="${img}">
          <div class="flex-grow">
            <h2 id='font1' class="text-white text-xl title-font font-medium">${title}</h2>
          </div>
        </div>
      </div>`
    })

    skillContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", displaycard);