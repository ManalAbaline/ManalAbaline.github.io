
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli ",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 1.99
	},
	{
		name: "bread ",
		vegetarian: true,
		glutenFree: false,
        organic: false,
		price: 2.35
	},
	{
		name: "salmon ",
		vegetarian: false,
		glutenFree: true,
        organic: false,
		price: 10.00
	},
    {
		name: "milk ",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 5
	},
    {
		name: "yogurt ",
		vegetarian: true,
		glutenFree: true,
        organic: false,
		price: 2.99
	},
    {
		name: "ground beef 1kg ",
		vegetarian: false,
		glutenFree: true,
        organic: false,
		price: 14
	},
    {
		name: "Eggs (12) ",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 2.99
	},
    {
		name: "Mashrooms ",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 2.25
	},
    {
		name: "peanut butter 300g ",
		vegetarian: true,
		glutenFree: true,
        organic: false,
		price: 4.25
	},
    {
		name: "wheat flour 2kg",
		vegetarian: true,
		glutenFree: false,
        organic: false,
		price: 4.29
	},
	{
		name: "milk 1%",
		vegetarian: true,
		glutenFree: true,
        organic: false,
		price: 5.99
	},
	{
		name: "Orange - 4 lb",
		vegetarian: true,
		glutenFree: true,
        organic: false,
		price: 6
	},
	{
		name: "tomatoes - 5 lb",
		vegetarian: true,
		glutenFree: true,
        organic: false,
		price: 5
	},
	{
		name: "Bananas - 4 lb",
		vegetarian: true,
		glutenFree: true,
        organic: false,
		price: 3
	}
];
	
function restrictListProducts(prods,vegDiet, glutDiet, orgDiet) {
	let product_names = [];
    // to sort by price
    prods.sort(function(a,b){return a.price-b.price});

    for (let i=0; i<prods.length; i+=1) {

		if ( (prods[i].vegetarian == true)&& (vegDiet == "Vegetarian")){
			if ((glutDiet == "GlutenFree") && (prods[i].glutenFree == true)){
				if ((prods[i].organic == true) && (orgDiet == "Organic")){
					product_names.push("$"+prods[i].price+" - "+prods[i].name);
				}
				else if ((orgDiet == "None") && (prods[i].organic == false)){
					product_names.push("$"+prods[i].price+" - "+prods[i].name);
				}
			}
			else if ((glutDiet == "None")){
				if ( (prods[i].organic == true)&& (orgDiet == "Organic")){
					product_names.push("$"+prods[i].price+" - "+prods[i].name);
				}
				else if ((prods[i].organic == false && (orgDiet == "None"))){
					product_names.push("$"+prods[i].price+" - "+prods[i].name);
				}
			}
		}
		else if ((vegDiet == "None")){
			if ( (prods[i].glutenFree == true)&& (glutDiet == "GlutenFree")){
				if ( (prods[i].organic == true)&& (orgDiet == "Organic")){
					product_names.push("$"+prods[i].price+" - "+prods[i].name);
				}
				else if ((orgDiet == "None") && (prods[i].organic == false)){
					product_names.push("$"+prods[i].price+" - "+prods[i].name);
				}
			}
			else if ((glutDiet == "None")){
				if ( (prods[i].organic == true)&& (orgDiet == "Organic")){
					product_names.push("$"+prods[i].price+" - "+prods[i].name);
				}
				else if ((prods[i].organic == false) && (orgDiet == "None")){
					product_names.push("$"+prods[i].price+" - "+prods[i].name);
				}
			}

		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {

	totalPrice = 0;

	for (let i=0; i<products.length; i+=1) {

		if (chosenProducts.indexOf("$"+products[i].price+" - "+products[i].name) > -1){	
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}