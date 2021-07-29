var AchiveContainer = document.querySelector('.Achivement')

var AchiveCard = [
    {
      title: "HackOn Hackathon 2.0",
      desc: "<strong>Best Hack Built On Elastic :</strong> Project Zone by theCuriousMinds in HackOn Hackathon 2.0",
      date:"May 2021", 
      img:"https://he-s3.s3.amazonaws.com/media/cache/c1/ac/c1ac27f899fcd944bdb55b6fc3dbc2e0.png",
      certificate: "./assest/HackOn_Priyanshu.jpg" 
    },
    {
        title: "Crio.do",
        desc: "<strong>Top 10 Performer</strong> in Crio.do over 3K+ developers Projects edition of #IBelieveinDoing",
        date:"May 2021",  
        img:"https://harshsri2208.github.io/images/crio_image.jpg",
        certificate: "./assest/croi_do.png" 

      },
      {
        title: "Game of Source",
        desc: "<strong>2nd Runner</strong> Up in GeeksforGeeks Student Chapter Game of Source, OpenSource Competition.",
        date:"October 2020", 
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20210101144014/gfglogo.png",
        certificate: "./assest/Certificate-GFG.png"  
      },
]



function displaycard(){
    // console.log('ok');
    let output = ""
    AchiveCard.forEach(({title ,desc,date,img,certificate}) =>{
        output += `<div class="xl:w-1/2 md:w-1/2 p-4">
        <div id="glass" class="p-6">
          <div class="inline-flex items-center">
            <img src=${img} class="w-10 h-10">
            </img>
            <h1 id='font1' class="text-2xl text-white font-medium title-font mb-2 ml-2"> ${title} |<span class="text-lg ml-2">${date}</span> </h1>
          </div>
          <p id='font1' class="leading-relaxed text-gray-200 text-base mt-2">${desc}</p>
          <img src=${certificate} class="mt-2"/>
        </div>
        </div>`
    
    })
    //  adding content to the container
    AchiveContainer.innerHTML = output
}
document.addEventListener("DOMContentLoaded", displaycard);
