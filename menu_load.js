// going to make a div with html in it and add it to the div in the page using append

window.onload = function()
{
	// selects the menu div and creates the unordered list
	const menu_div = document.getElementById("menu");
	let list = document.createElement('ul');

	// home page
	let home_element = document.createElement('li');
	let home = document.createElement('a');
	let home_text = document.createTextNode("Home");

	home_element.appendChild(home);
	home.appendChild(home_text);
	home_element.title = "Home";
	home.href = "index.html";
}

/*
let link_text = document.createTextNode(businessName);
new_link.appendChild(link_text);
new_link.title = ";




let new_link = document.createElement('a');
			let link_text = document.createTextNode(businessName);
			new_link.appendChild(link_text);
			new_link.title = businessName;
			
			
			new_link.href = website
*/