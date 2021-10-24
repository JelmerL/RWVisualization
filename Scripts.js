//Visualization Scripts


//Dataset Info 
//curl -X GET https://api.resourcewatch.org/v1/dataset/702f4bcb-c376-49b6-9345-cdc8aa989582

//Resource Watch Query For Data
//curl -X GET 'https://api.resourcewatch.org/v1/download/702f4bcb-c376-49b6-9345-cdc8aa989582?sql=SELECT food_type,total_ghg_emissions_co2e_per_million_kilocalories_consumed from foo_046b_food_footprint_calories_wrrupdate&format=json'

/* api url
const api_url = 
      "https://api.resourcewatch.org/v1/download/702f4bcb-c376-49b6-9345-cdc8aa989582?sql=SELECT food_type,total_ghg_emissions_co2e_per_million_kilocalories_consumed from foo_046b_food_footprint_calories_wrrupdate&format=json";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    rawData = await response.json();
    console.log(rawData);
}
// Calling that async function
getapi(api_url); */
