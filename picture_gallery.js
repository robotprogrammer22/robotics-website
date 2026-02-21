/*document.addEventListener("DOMContentLoaded", (event) => {
	console.log("page fully loaded");
//	page_loaded = true;

    displayImages();

});

function displayImages()
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
showSlides(slideIndex);

function previousSlide()
{
    showSlides(slideIndex -= 1);
}

function nextSlide()
{
    showSlides(slideIndex += 1);
}

function setSlide(slide_number) {
    showSlides(slideIndex = slide_number);
}

function showSlides(n)
{
    let i;
    let slides = document.getElementsByClassName("slideshow-picture");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length)
    {
        slideIndex = 1;
    }
    if (n < slides.length)
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[1].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active" ;
}