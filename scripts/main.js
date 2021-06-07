	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct11, slct12, slct13, pV, pB, pP, pD, pN, pM, pDa) {

	var thisTab = document.getElementById("Client");
	thisTab.setAttribute('style','visibility:hidden; display:none;');
	var nextTab = document.getElementById("Products");
	nextTab.setAttribute('style','visibility: visible;');

    var s11 = document.getElementById(slct11);
    var s12 = document.getElementById(slct12);
    var s13 = document.getElementById(slct13);

    var s2V = document.getElementById(pV);
    var s2B = document.getElementById(pB);
    var s2P = document.getElementById(pP);
    var s2D = document.getElementById(pD);
    var s2N = document.getElementById(pN);
    var s2M = document.getElementById(pM);
    var s2Da = document.getElementById(pDa);

	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2V.innerHTML = "";
    s2B.innerHTML = "";
    s2P.innerHTML = "";
    s2D.innerHTML = "";
    s2N.innerHTML = "";
    s2M.innerHTML = "";
    s2Da.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s11.value, s12.value, s13.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i=i+3) {
			
		var productName = optionArray[i+2];
		var productPrice = optionArray[i+1];
		var pClass = optionArray[i];
		// create the checkbox and add in HTML DOM

		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;

		if (pClass=="Vegetable") {

			s2V.appendChild(document.createElement("br"));  

			var label = document.createElement('label');
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName+" - $"+productPrice));

			var div = document.createElement('div');
			div.setAttribute('class','productSquare');
			div.setAttribute('style','background-image: url("'+productName+'.jpg");')

			div.appendChild(checkbox);
			div.appendChild(label);
			
			s2V.appendChild(div);
			s2V.appendChild(document.createElement("br"));   

		}
		else if (pClass=="Bread") {

			s2B.appendChild(document.createElement("br"));  

			var label = document.createElement('label');
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName+" - $"+productPrice));

			var div = document.createElement('div');
			div.setAttribute('class','productSquare');
			div.setAttribute('style','background-image: url("'+productName+'.jpg");')

			div.appendChild(checkbox);
			div.appendChild(label);
			
			s2B.appendChild(div);
			s2B.appendChild(document.createElement("br"));  

		}
		else if (pClass=="Protein") {

			s2P.appendChild(document.createElement("br"));  

			var label = document.createElement('label');
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName+" - $"+productPrice));

			var div = document.createElement('div');
			div.setAttribute('class','productSquare');
			div.setAttribute('style','background-image: url("'+productName+'.jpg");')

			div.appendChild(checkbox);
			div.appendChild(label);
			
			s2P.appendChild(div);
			s2P.appendChild(document.createElement("br"));     
		}
		else if (pClass=="Desert") {

			s2D.appendChild(document.createElement("br"));  

			var label = document.createElement('label');
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName+" - $"+productPrice));

			var div = document.createElement('div');
			div.setAttribute('class','productSquare');
			div.setAttribute('style','background-image: url("'+productName+'.jpg");')

			div.appendChild(checkbox);
			div.appendChild(label);
			
			s2D.appendChild(div);
			s2D.appendChild(document.createElement("br"));    

		}
		else if (pClass=="Nut") {
			s2N.appendChild(document.createElement("br"));  

			var label = document.createElement('label');
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName+" - $"+productPrice));

			var div = document.createElement('div');
			div.setAttribute('class','productSquare');
			div.setAttribute('style','background-image: url("'+productName+'.jpg");')

			div.appendChild(checkbox);
			div.appendChild(label);
			
			s2N.appendChild(div);
			s2N.appendChild(document.createElement("br"));    
		}
		else if (pClass=="Meal") {
			s2M.appendChild(document.createElement("br"));  

			var label = document.createElement('label');
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName+" - $"+productPrice));

			var div = document.createElement('div');
			div.setAttribute('class','productSquare');
			div.setAttribute('style','background-image: url("'+productName+'.jpg");')

			div.appendChild(checkbox);
			div.appendChild(label);
			
			s2M.appendChild(div);
			s2M.appendChild(document.createElement("br"));   
		}
		else if (pClass=="Dairy") {
			s2Da.appendChild(document.createElement("br"));  

			var label = document.createElement('label');
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName+" - $"+productPrice));

			var div = document.createElement('div');
			div.setAttribute('class','productSquare');
			div.setAttribute('style','background-image: url("'+productName+'.jpg");')

			div.appendChild(checkbox);
			div.appendChild(label);
			
			s2Da.appendChild(div);
			s2Da.appendChild(document.createElement("br"));   
		}
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	var thisTab = document.getElementById("Products");
	thisTab.setAttribute('style','visibility:hidden; display:none;');
	var nextTab = document.getElementById("Cart");
	nextTab.setAttribute('style','visibility: visible;');

	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.appendChild(document.createElement("br"));

	for (i = 0; i < ele.length; i++) { 

		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	
	var total = document.createElement("p");
	total.appendChild(document.createTextNode("Total Price: $" + getTotalPrice(chosenProducts).toFixed(2) ));
	total.setAttribute('class','total');
	
	c.appendChild(total);
		
}

