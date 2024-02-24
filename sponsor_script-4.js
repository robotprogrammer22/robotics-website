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

const url = "sponsors-9.json";
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

function fillRankedDiv(sponsors, rank_div)
{
	// get sponsors array
	//sponsors = year_object.sponsors;
	// get number of sponsors
	sponsors_length = sponsors.length;
	//console.log("sponsors_length:" + sponsors_length);
	// itereates through sponsor list
	for (let y=0; y<sponsors_length; y++)
	{
		// gets business from array
		business = sponsors[y];
		
		if (business != null)
		{
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
				rank_div.appendChild(new_link);
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
				
				new_link.setAttribute('target', "_blank");
				rank_div.appendChild(new_link);
			}
		}
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
	let list_type;
	
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
		// get if the array is ranked or unranked
		list_type = year_object.type;
		// get sponsors array
		//sponsors = year_object.sponsors;
		// get number of sponsors
		//sponsors_length = sponsors.length;
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
		
		// checks if using a ranked sponsors system. If so, look for titanium, gold, etc.
		// if not, then put everything into the same div
		if (list_type == "ranked")
		{
			// gets the array of ranks from the json
			let ranks = year_object.sponsors_ranks;
			// gets the length of the ranks array
			let ranks_length = ranks.length;
			//console.log(ranks);
			//console.log(ranks_length);
			
			// iterate through the ranks of sponsors
			for (let rank_index=0; rank_index < ranks_length; rank_index++)
			{
				let rank_element = ranks[rank_index];
				//console.log(rank_element);
				
				let rank = rank_element.rank;
				//console.log(rank);
				
				sponsors = rank_element.sponsors;
				//console.log(sponsors);
				
				if (rank == "titanium" && sponsors != null)
				{
					//console.log("titanium");
					let titanium_div = document.createElement('div');
					titanium_div.id = "titanium";
					let titanium_header = document.createElement('h3');
					let header_text = document.createTextNode("Titanium");
					titanium_header.appendChild(header_text);
					titanium_header.title = "titanium";
					titanium_div.appendChild(titanium_header);
					year_div.appendChild(titanium_div);
					
					let titanium_sponsors = document.createElement('div');
					titanium_sponsors.id = "titanium_sponsors";
					titanium_div.appendChild(titanium_sponsors);
					
					fillRankedDiv(sponsors, titanium_sponsors);
				}
				else if (rank == "platinum" && sponsors != null)
				{
					//console.log("platinum");
					let platinum_div = document.createElement('div');
					platinum_div.id = "platinum";
					let header = document.createElement('h3');
					let header_text = document.createTextNode("Platinum");
					header.appendChild(header_text);
					header.title = "platinum";
					platinum_div.appendChild(header);
					year_div.appendChild(platinum_div);
					
					let platinum_sponsors = document.createElement('div');
					platinum_sponsors.id = "platinum_sponsors";
					platinum_div.appendChild(platinum_sponsors);
					
					fillRankedDiv(sponsors, platinum_sponsors);
				}
				else if (rank == "gold" && sponsors != null)
				{
					//console.log("gold");
					let gold_div = document.createElement('div');
					gold_div.id = "gold";
					let header = document.createElement('h3');
					let header_text = document.createTextNode("Gold");
					header.appendChild(header_text);
					header.title = "gold";
					gold_div.appendChild(header);
					year_div.appendChild(gold_div);
					
					let gold_sponsors = document.createElement('div');
					gold_sponsors.id = "gold_sponsors";
					gold_div.appendChild(gold_sponsors);
					
					fillRankedDiv(sponsors, gold_sponsors);
				}
				else if (rank == "silver" && sponsors != null)
				{
					//console.log("silver");
					let silver_div = document.createElement('div');
					silver_div.id = "silver";
					let header = document.createElement('h3');
					let header_text = document.createTextNode("Silver");
					header.appendChild(header_text);
					header.title = "silver";
					silver_div.appendChild(header);
					year_div.appendChild(silver_div);
					
					let silver_sponsors = document.createElement('div');
					silver_sponsors.id = "silver_sponsors";
					silver_div.appendChild(silver_sponsors);
					
					fillRankedDiv(sponsors, silver_sponsors);
				}
				else if (rank == "bronze" && sponsors != null)
				{
					//console.log("bronze");
					let bronze_div = document.createElement('div');
					bronze_div.id = "bronze";
					let header = document.createElement('h3');
					let header_text = document.createTextNode("Bronze");
					header.appendChild(header_text);
					header.title = "bronze";
					bronze_div.appendChild(header);
					year_div.appendChild(bronze_div);
					
					let bronze_sponsors = document.createElement('div');
					bronze_sponsors.id = "bronze_sponsors";
					bronze_div.appendChild(bronze_sponsors);
					
					fillRankedDiv(sponsors, bronze_sponsors);
				}
				else
				{
					// checking for sponsors list here since this is an else statement
					if  (sponsors != null)
					{
						//console.log("other");
						let other_div = document.createElement('div');
						other_div.id = "other";
						let header = document.createElement('h3');
						let header_text = document.createTextNode("Other");
						header.appendChild(header_text);
						header.title = "other";
						other_div.appendChild(header);
						year_div.appendChild(other_div);
						
						let other_sponsors = document.createElement('div');
						other_sponsors.id = "other_sponsors";
						other_div.appendChild(other_sponsors);
						
						fillRankedDiv(sponsors, other_sponsors);
					}
				}
			}
		}
		// if not a ranked sponsors list
		else
		{
            year_div.classList.add("unranked");
			// get sponsors array
			sponsors = year_object.sponsors;
			// get number of sponsors
			sponsors_length = sponsors.length;
			//console.log("sponsors_length:" + sponsors_length);
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
}