// going to make a div with html in it and add it to the div in the page using append

window.onload = function()
{
	// selects the menu div and creates the unordered list
	const menu_div = document.getElementById("menu");
	let list = document.createElement('ul');

	// home page
	// creates home page menu elements
	let home_element = document.createElement('li');
	let home = document.createElement('a');
	let home_text = document.createTextNode("Home");

	// adds data to home page link elements
	home_element.appendChild(home);
	home.appendChild(home_text);
	home_element.title = "Home";
	home.href = "index.html";
	
	// adds home page link to menu
	list.appendChild(home_element);
	
	// sponsors page
	// creates sponsors page menu elements
	let sponsors_menu_element = document.createElement('li');
	let sponsors_page_link = document.createElement('a');
	let sponsors_menu_text = document.createTextNode("Sponsors");
	
	// adds data to sponsors page link elements
	sponsors_menu_element.appendChild(sponsors_page_link);
	sponsors_page_link.appendChild(sponsors_menu_text);
	sponsors_menu_element.title = "Sponsors";
	sponsors_page_link.href = "sample_sponsors_page.html"
	
	// adds sponsors page link to menu
	list.appendChild(sponsors_menu_element);
	
	// history page
	// creates history page menu elements
	let history_menu_element = document.createElement('li');
	let history_page_link = document.createElement('a');
	let history_menu_text = document.createTextNode("History");
	
	// adds data to history page link elements
	history_menu_element.appendChild(history_page_link);
	history_page_link.appendChild(history_menu_text);
	history_menu_element.title = "History";
	history_page_link.href = "history.html";
	
	// adds history page to menu elements
	list.appendChild(history_menu_element);
	
	// building fund page
	// creates building page menu elements
	let building_menu_element = document.createElement('li');
	let building_page_link = document.createElement('a');
	let building_menu_text = document.createTextNode("Building Fund");
	
	// adds data to history page link elements
	building_menu_element.appendChild(building_page_link);
	building_page_link.appendChild(building_menu_text);
	building_menu_element.title = "Building Fund";
	building_page_link.href = "building_fund.html";
	
	// adds history page to menu elements
	list.appendChild(building_menu_element);
	
	// adds all menu elements to the page
	menu_div.appendChild(list);
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