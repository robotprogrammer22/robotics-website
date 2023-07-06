/*
new sponsors page
rankings:
	titanium = $10,000+
	platinum = $5000-$9,999
	gold = $2,500-$4,999
	silver = $1000-$2,499
	bronze = $500-$999
	other category/general (paper says Vibranium??? (might want to call it something else)
more money = bigger font

have div for each year, like existing
	sub div for each category to make css easier
	maybe add class/id to each url link?????
	add do not follow for url page? the not giving reputation to each link???? do we want to do this? so our site reputation is not giving theirs something
		for search engine???????
script needs to be able to go through and place each one in the proper category, order in json should not matter
	can do this by running through the file, sorting each thing into an array, or just pulling each element that has the tag of level
	or do money amount in file and then put into place depending on that (privacy though could be a problem there)
script needs to ignore upper/lower case inside of rank spot. This will mess up sorting.

if rank is missing, just put all into a general sponsors category?
or just check for a value to see if ranked or just a list and add this to json

do we want to have a collapsable menu for older sponsors? like, click to expand or just have it show by default?

options: either place each element in the proper category as it goes, or sort/look for certain values, then place all of that group in at the same time
do we want to sort by donation amount in each category? or just let that go by order of document as long as sorted into proper category
could make an array of all json elements, and have an array for each category that gets sorted through first, then fill spaces
	order of doc still wouldn't matter except for within category
	
need to have a way to preserve some of the older sponsors listing without ranks, either same json file or different one?
	same would keep it easier to update. Could just add a name in the json so that it's easily sortable
	
will either need bubble sort algorithm, or just a script that goes through one by one and adds to array, then iterates through each array before filling the page


json file could have sorting already done. So there will be categories based on year instead of just randomly added with a rank.
	new sponsors would have to be put into the right category, and if there is nothing a null value will be used?
	this would create more work on the initial input end, but the json overall will likely be easier to read and evaluate than
	just a huge list. This would also take away the need to sort in javascript, speeding up script processing time (if this even matters)
*/




const json_request = new XMLHttpRequest();

const url = "sponsors-6.json";
json_request.open("GET", url, true);
json_request.send();

json_request.onload = function()
{
	// parses the json result
	let sponsor_data = JSON.parse(json_request.response);
	// if there's sponsor data, run the code, if not, display an error
	if (sponsor_data != null)
	{
		displayData(sponsor_data);
	}
	else
	{
		console.log("error displaying sponsor data");
	}
}

function displayData(sponsor_obj)
{
	let year_object;
	let year;
	let sponsors;
	let sponsors_length;
	let business;
	let businessName;
	let website;
	let sponsor_rank;
	
	// gets the sponsors div from the html page
	const sponsors_div = document.getElementById("sponsors");
	
	// gets the javascript warning message and removes it
	const warning_delete = document.getElementById("java_warning");
	warning_delete.remove();
	console.log("javascript disabled warning removed");
	
	
	// declares variable for later use
	
	// gets the years from years
	let years = sponsor_obj.years;
	// number of objects in years
	let obj_number = years.length;
	//console.log("years:" + obj_number);
	// iterates through the years of sponsors
	for (let i=0; i<obj_number; i++)
	{
		// gets year at index
		year_object = years[i];
		// get year value
		year = year_object.year;
		//console.log("year:" + year);
		// get sponsors array
		sponsors = year_object.sponsors;
		// get number of sponsors
		sponsors_length = sponsors.length;
		//console.log("sponsors_length:" + sponsors_length);
		
		// create header for year
		let year_div = document.createElement('div');
		let new_year = document.createElement('h2');
		let year_text = document.createTextNode(year);
		year_div.id = "year_div";
		new_year.appendChild(year_text);
		new_year.title = "year";
		sponsors_div.appendChild(new_year);
		sponsors_div.appendChild(year_div);
		
		// itereates through sponsor list
		for (let y=0; y<sponsors_length; y++)
		{
			// gets business from array
			business = sponsors[y];
			// gets name of business
			businessName = business.businessName;
			// gets website for business
			website = business.website;
			//console.log("business:" + businessName);
			//console.log("website:" + website);
			sponsor_rank = business.rank;
			//console.log("rank:" + sponsor_rank);
			
			
			let new_link = document.createElement('a');
			let link_text = document.createTextNode(businessName);
			new_link.appendChild(link_text);
			new_link.title = businessName;
			
			if (website=="null")
			{
				/*let new_link = document.createElement('a');
				let link_text = document.createTextNode(businessName);
				new_link.appendChild(link_text);
				new_link.title = businessName;*/
				//sponsors_div.appendChild(new_link);
				year_div.appendChild(new_link);
			}
			else
			{
				// creates new link element
				/*let new_link = document.createElement('a');
				let link_text = document.createTextNode(businessName);
				new_link.appendChild(link_text);
				new_link.title = businessName;*/
				new_link.href = website;
				//sponsors_div.appendChild(new_link);
				year_div.appendChild(new_link);
			}
		}
	}
}