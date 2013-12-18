var searchResultString = '{"products": [{"name": "Acme Roadrunner Trap","manufacturer": "Acme Corporation","price": 500,"availibility": "in stock"},{"name": "Acme Roadrunner Decoy","manufacturer": "Acme Corporation","price": 750,"availibility": "backorder"}],"suggestions": [{"name": "Ultimate Fake Tunnel","manufacturer": "Ultimate Fakers Corporation","price": 200,"availibility": "in stock"}],"categories": [ "Cages", "Traps", "Signs" ]}';

console.log(searchResultString);
var searchResult = JSON.parse(searchResultString);
console.log(searchResult.products[0].availibility);
console.log(searchResult.suggestions[0].price);
console.log(searchResult.categories[1]);

 
