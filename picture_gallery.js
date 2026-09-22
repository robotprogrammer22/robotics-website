document.addEventListener("DOMContentLoaded", (event) => {
	console.log("page fully loaded");
//	page_loaded = true;

    //displayImages();

    //let slideIndex = 1;
    showSlides(1);

});

/*function displayImages()
{
    let year;
    const image_div = document.getElementById("auto-fill-gallery");

    if (image_div != null)
    {

    }
    else
    {
        console.log("image div not found");
    }
}*/

let slideIndex = 1;
//showSlides(slideIndex);

function previousSlide()
{
    slideIndex -= 1;
    showSlides(slideIndex);
    console.log("previous slide: " + slideIndex);
}

function nextSlide()
{
    slideIndex += 1;
    showSlides(slideIndex);
    console.log("next slide: " + slideIndex);
}

function setSlide(slide_number) {
    showSlides(slideIndex = slide_number);
    console.log("set slide: " + slideIndex);
}

/*function plusSlides(n)
{
    showSlides(slideIndex += n);
}

function currentSlide(n)
{
    showSlides(slideIndex = n);
}*/

function showSlides(n)
{
    let i;
    //let slides = document.getElementsByClassName("slideshow-picture");
    let slides = document.getElementsByClassName("slides");
    console.log("slides: " + slides);
    let dots = document.getElementsByClassName("dot");
    console.log("dots: " + dots);

    let slideIndex = n;
    console.log("slide length:" + slides.length);

    /*if (n > slides.length)
    {
        slideIndex = 1;
    }

    if (n < slides.length)
    {
        slideIndex = slides.length;
    }*/

    if (n < 1)
    {
        slideIndex = 1;
    }

    /*if (n < slides.length)
    {
        //slideIndex = 1;
        slideIndex = n;
    }*/

    if (n > slides.length)
    {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    /*slideIndex++
    if (slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);*/

    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace("active", "");
    }

    console.log("slide index:" + slideIndex);
    console.log(slides[slideIndex]);
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active" ;
    //slides[slideIndex].style.display = "block";
    //dots[slideIndex].className += "active";
    
}

/*
let slideIndex = 0;
showSlides();

function showSlides()
{
    let i;
    let slides = document.getElementsByClassName("slideshow-picture");
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);
}*/