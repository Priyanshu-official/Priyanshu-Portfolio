var slideShow = document.querySelector(".slideshow-container")

var slideCard = [
    {
        img: './assest/certificate/internship_certificate_Verzeo.jpg',
        caption: 'Internship on Web Development',
        color:'#ff3333'
    },
    {
        img: './assest/certificate/Internship_Certificate _Highradius.jpg',
        caption: 'Internship Certificate',
        color:'#ff3333'
    },
    {
        img: './assest/certificate/python_shapeAI.png',
        caption: 'Python Training ',
    },
    {
        img: './assest/certificate/SQL_ShapeAI.jpg',
        caption: 'SQl Training',
    },
    {
        img: './assest/certificate/Webdev_Verzeo.jpg',
        caption: 'Web Development Course',
    },
    {
        img: './assest/certificate/JavaScript.jpg',
        caption: 'Java Script Course',
    },
    {
        img: './assest/certificate/front-end-React_coursera.png',
        caption: 'Front-End Web Development with React',
    },
    {
        img: './assest/certificate/Priyanshu_SWOC.png',
        caption: 'Appreciation Certificate',
    },

]

function displaySlide(){
    let output = ""
    slideCard.forEach(({img, caption,color}) => {
        output += `<div class="mySlides fade dot">
        <div class="slide-img-container">
          <img src="${img}" style="width:100%">
        </div>
        <div class="text" style="color:${color}; padding:2px;">${caption}</div>
      </div>`
        
      slideShow.innerHTML = output
    });

    var slideIndex = 0;
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 5000); // Change image every 2 seconds
}



document.addEventListener("DOMContentLoaded", displaySlide);