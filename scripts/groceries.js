	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true,
		classification: "Vegetable"
	},
	{
		name: "Carrot",
		vegetarian: true,
		glutenFree: true,
		price: 0.35,
		organic: true,
		classification: "Vegetable"
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: false,
		classification: "Bread"
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: false,
		classification: "Protein"
	},
	{
		name: "butter tart",
		vegetarian: true,
		glutenFree: true,
		price: 5,
		organic: true,
		classification: "Desert"
	},
	{
		name: "ground beef",
		vegetarian: false,
		glutenFree: false,
		price: 15.00,
		organic: false,
		classification: "Protein"
	},
	{
		name: "brazil nuts",
		vegetarian: true,
		glutenFree: true,
		price: 11.99,
		organic: false,
		classification: "Nut"
	},
	{
		name: "salad",
		vegetarian: true,
		glutenFree: true,
		price: 20,
		organic: true,
		classification: "Meal"
	},
	{
		name: "traditional bread",
		vegetarian: true,
		glutenFree: false,
		price: 3.99,
		organic: false,
		classification: "Bread"
	},
	{
		name: "eggs",
		vegetarian: true,
		glutenFree: true,
		price: 3.99,
		organic: true,
		classification: "Protein"
	},
	{
		name: "tuna",
		vegetarian: false,
		glutenFree: true,
		price: 2.25,
		organic: false,
		classification: "Protein"
	},

	{
		name: "almonds",
		vegetarian: true,
		glutenFree: true,
		price: 9,
		organic: true,
		classification: "Nut"
	},
	{
		name: "chicken wings",
		vegetarian: false,
		glutenFree: false,
		price: 16,
		organic: false,
		classification: "Protein"
	},
	{
		name: "strawberry cheesecake",
		vegetarian: false,
		glutenFree: true,
		price: 25,
		organic: false,
		classification: "Desert"
	},
	{
		name: "shrimp",
		vegetarian: false,
		glutenFree: true,
		price: 19,
		organic: true,
		classification: "Protein"
	},
	{
		name: "Milk-2",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true,
		classification: "Dairy"
	},
	{
		name: "creamcheese",
		vegetarian: true,
		glutenFree: true,
		price: 2.99,
		organic: false,
		classification: "Dairy"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, vege, glut, org) {
	
	let product_names = [];

	prods.sort(function(a,b){return a.price-b.price});

	for (let i=0; i<prods.length; i+=1) {
		
		if ((vege == "Vegetarian") && (prods[i].vegetarian == true)){
			if ((glut == "GlutenFree") && (prods[i].glutenFree == true)){
				if ((org == "Organic") && (prods[i].organic == true)){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}
				else if ((org == "None") && (prods[i].organic == false)){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}
				else if ((org == "All")){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}

			}

			else if ((glut == "None")){

				if ((org == "Organic") && (prods[i].organic == true)){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}

				else if ((org == "None") && (prods[i].organic == false)){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}

				else if ((org == "All")){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}
			}

		}
		else if ((vege == "None")){

			if ((glut == "GlutenFree") && (prods[i].glutenFree == true)){
				if ((org == "Organic") && (prods[i].organic == true)){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}

				else if ((org == "None") && (prods[i].organic == false)){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}

				else if ((org == "All")){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}

			}
			else if ((glut == "None")){

				if ((org == "Organic") && (prods[i].organic == true)){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}

				else if ((org == "None") && (prods[i].organic == false)){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}

				else if ((org == "All")){
					product_names.push(prods[i].classification);
					product_names.push(prods[i].price.toFixed(2));
					product_names.push(prods[i].name);
				}
			}

		}
	}
	return product_names;
}

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {

		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}