	
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
		name: "Chocolate",
		vegetarian: true,
		glutenFree: true,
		price: 2.45,
		organic: true,
		classification: "Desert"
	},
	{
		name: "Beef Steak",
		vegetarian: false,
		glutenFree: false,
		price: 17.00,
		organic: true,
		classification: "Protein"
	},
	{
		name: "Coconut",
		vegetarian: true,
		glutenFree: true,
		price: 8.55,
		organic: false,
		classification: "Nut"
	},
	{
		name: "Pad-thai",
		vegetarian: true,
		glutenFree: false,
		price: 18.45,
		organic: false,
		classification: "Meal"
	},
	{
		name: "Pretzel",
		vegetarian: true,
		glutenFree: false,
		price: 3.99,
		organic: false,
		classification: "Bread"
	},
	{
		name: "Tofu",
		vegetarian: true,
		glutenFree: false,
		price: 5.99,
		organic: true,
		classification: "Protein"
	},
	{
		name: "Hazelnuts",
		vegetarian: true,
		glutenFree: true,
		price: 5.99,
		organic: true,
		classification: "Nut"
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: false,
		price: 5.99,
		organic: false,
		classification: "Protein"
	},
	{
		name: "Shrimp",
		vegetarian: false,
		glutenFree: true,
		price: 5.99,
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
		name: "Milk-1",
		vegetarian: true,
		glutenFree: true,
		price: 0.99,
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