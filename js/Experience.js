// main Container as data will added
var experienceContainer = document.querySelector('.Experience')

// array containig data Card view
var experienceCard = [
    {
        title: 'Data Science Analyst',
        company: 'HighRadius',
        date: 'Jun 2022- Present',
        desc: `I have collaborated with the Inflight Team to achieve optimal automation percentage for DMS, ensuring swift delivery of value to clients. 
        This involved successfully completing 4 CPG segment projects and actively participating in the pre-preparation phase, as well as shadowing the 
        best automation practices for a seamless transition to the go-live stage. Working alongside the Project Team, I have identified the underlying 
        reasons for low automation and provided effective strategies to enhance the percentage. These efforts have empowered our clients to enhance their 
        efficiency in B2B transactions and attain tangible business outcomes, such as reducing DSO, optimizing working capital, minimizing bad debt, and ultimately improving productivity.<br>
        1. Automation Strategy: Developing effective strategies for maximizing automation percentage in DMS.
        2. Project Management: Coordinating tasks, managing timelines, and ensuring successful project execution.
        3. Root Cause Analysis: Identifying underlying factors and proposing solutions to improve automation levels.
        4. Communication and Collaboration: Collaborating with teams and understanding client requirements.`,
        Link:'',
    },
    {
        title: 'Data Analyst Intern',
        company: 'HighRadius',
        date: 'Jun 2021- Jun 2022',
        desc: `I was part of the deduction management system (O2C cycle) team at Highradius, 
        where I applied my data analysis and rule-based programming skills to use Automation Algo to 
        analyze data and create rules for identifying the causes of deductions in customer claims. 
        I also demonstrated my project management and problem-solving skills by working closely with the Project Manager and SDM to increase 
        the automation rate from the base percentage to 85% by conducting root cause analysis on the project. I delivered quality results on time for more than 10 accounts, 
        showing my reliability and efficiency.`,
        Link:'',
    },
    {
        title: 'Full Stack Developer Summer Internship',
        company: 'HighRadius',
        date: 'May 2021- Jun 2021',
        desc: `I was involved in building and deploying an AI-enabled B2B Fintech cloud application. During this project, 
        I gained a deep understanding of all aspects of product development by identifying user requirements, designing a great user experience,
        and building appropriate data models. I used technologies such as Java, JDBC, HTML, CSS, JSP/Servlets, and JavaScript to create a full-stack web-based product.
        Additionally, I built a Receivables Dashboard.,<br>
        ● Visualize Data in the form of a table. 
        ● Perform Searching operations on the invoices. 
        ● Modify data in the editable fields of the grid.`,
        Link:'https://drive.google.com/file/d/12qiqfylS1BKvLe06jCBDjD-FrzfsHVzQ/view?usp=share_link',
    },
    {
        title: 'Web-Developer',
        company: 'Divergent Infoconnect',
        date: 'Oct 2020- April 2021',
        desc: `➔ Developed Company Website & Deployed on server, Worked on more 2 project i.e Portfolio, Divergentlly. <br>
        ➔ Also launched New service i.e Web development service. Learned new technology like CMS (WordPress), Web
        Scraping, Hosting Website`,
        LOR: 'L O R' ,
        Link:'https://drive.google.com/file/d/1xERjWkN3amCniZyeGMEcwlseKXtYqmgr/view?usp=sharing',
    },
    {
      title: 'WordPress Developer',
      company: 'Careerguide.com',
      date: 'Oct 2020 - Nov 2020',
      desc: `➔ I Worked with the CEO & developer team and got an opportunity to help new Interns. <br>
      ➔ Worked on a new Business Idea i.e Become A Psychometric Partner & Earn With CareerGuide .`,
      LOR: 'Certificate' ,
      Link:'https://drive.google.com/file/d/1XVCsfJFC7r5E3PI8CRBuoltd6_dITBL3/view?usp=sharing',
  },    {
    title: 'Participant',
    company: 'Script Winter of Code (SWOC)',
    date: 'Jan 2021 - Mar 2021',
    desc: `➔ Contributed and Collaborated in OpenSource Projects Amazing-Python-Scripts, Awesome Portfolio Websites,
    Idea Lab.`,
    LOR: 'Certificate' ,
    Link:'https://drive.google.com/file/d/1Rvy5Z4klHRyAoB_4aYHuyWbJWSIeHyrP/view?usp=sharing',
},

]

function displaycard(){
    // console.log('ok');
    let output = ""
    experienceCard.forEach(({title ,desc,date,company, Link,LOR}) =>{
        output += `
        <li class="event">
        <div class="inline-flex">
            <h3 class="color1 sm:text-base text-xs">${title}</h3><span class="border-l-2 border-blue-500 ml-1"></span> <span class="sm:text-base text-xs ml-2 " id="color3"> ${company}</span>
        </div>
          <p >${desc}</p>
          <div clas="flex w-full ">
            <div class="inline-flex mt-4">
                    <a href=${Link} target="_blank">
                        <button class="btn-glass flex border-white border-b-2 border-opacity-25 text-white border-0 py-2 px-4 focus:outline-none rounded-lg text-base hover:text-blue-500 hover:border-blue-500 "
                        >${LOR}</button>
                   </a>
            </div>
        </div>
          <p class="month">${date}</p>
        </li>`
    
    })
    //  adding content to the container
    experienceContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", displaycard);