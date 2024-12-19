/* use css media queries to determine 

create button, add image tag inside, which will load hamburger
on click, add styleset hide/unhide css class

display: none
click first time set to display none, js create variable to track if currently
displayed, if it is, set display to initial (default value)

https://www.w3schools.com/howto/howto_js_collapsible.asp

use media query to specify button to when not mobile display be none on button

if menu start collapsed, give default value none, then switch to block or something else when clicked,
if clicked again back to none

button not there if not mobile, so that js wouldn't run

css would control if hamburger is displayed

if mobile, iframe hidden

all js does is check the click for now

have menu automatically open and have it close on javascript load
so default = open
*/

function main()
{
    console.log("menu javascript loaded");
    const menu_doc = document.getElementById("mobile_menu");
    console.log("mobile_menu: " + menu_doc);
    const nav_button = document.getElementById("hamburger");
    console.log("nav_button: " + nav_button);
    if (nav_button != null)
    {
        console.log("not null");
        nav_button.addEventListener("clicked", nav_button_clicked);
    }
}

const nav_button_clicked = () =>
{
    console.log("hamburger clicked");
    const mobile_menu = document.getElementById("mobile_menu_list");
    //console.log("mobile_menu: " + mobile_menu)
    if (mobile_menu != null)
    {
        if (mobile_menu.classList.contains("menu_shown"))
        {
            mobile_menu.classList.remove("menu_shown");
        }
        else
        {
            mobile_menu.classList.add("menu_shown");
        }
    }
}

const menu_loaded = () =>
{
    console.log("menu loaded");
    const mobile_menu = document.getElementById("mobile_menu_list");
    mobile_menu.classList.add("menu_shown");
}

main();