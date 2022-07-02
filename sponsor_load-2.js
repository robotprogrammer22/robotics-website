const json_request = new XMLHttpRequest();

const url = "sponsors-3.json";
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
	
	// gets the sponsors div from the html page
	const sponsors_div = document.getElementById("sponsors");
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