import React,{Component} from 'react';
import {Container,Jumbotron,CardColumns} from 'react-bootstrap'
import Res from "../img/results.jpg";
import CleanserCards from "./Cards";

import ResultsCards from "./IngredientCards";

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    //console.log("hello");
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }


class Results extends Component {
    state = {
        cleansers : [
            {
                id:1, 
                type: 1,
                brand: 'KETO, LOW-CARB',
                name: 'CAULIFLOWER POTATO SALAD',
                description: 'Tastes just like the classic potato salad but healthier! This low-carb side dish is seasoned to perfection in a creamy dressing.',
                ingredients: ['6 cups cauliflower cut into small florets','-8 hard boiled eggs roughly chopped','-1 cup chopped celery','-2/3 cup chopped green onion','-2/3 cup chopped dill pickles','-8 ounces bacon, cooked and crumbled'],
                concerns: ['Olive Oil', 'Vegetables', 'Salad'],
                skintype:['Vegetarian']
            },
            {
                id:6,
                type: 2, 
                brand: 'High protein meal',
                name: 'Salmon Burger',
                description: 'Salmon is not just a great source of protein, it is also one of the best sources of omega-3s. ',
                ingredients: ['1 seedless cucumber, very thinly sliced', '1 egg, lightly beaten','1 large shallot, minced','¼ cup white or rice wine vinegar', '2 shallots, thinly sliced'],
                concerns: ['Vegetables', 'Fish'],
                skintype:['No restrictions']
            },
            {
                id:7,
                type: 2, 
                brand: 'High protein meal',
                name: 'Shrimp Scampi',
                description: 'The muscle-building fish is used in this dish, which comes together in no time. ',
                ingredients: ['8 ounces linguine', '2 tablespoons unsalted butter', '1 pound medium shrimp, peeled and deveined'],
                concerns: ['Vegetables', 'Fish'],
                skintype:['No restrictions']
            },
            {
                id: 4,
                type: 1,
                brand: 'KETO, LOW-CARB',
                name: "BAKED STUFFED AVOCADO",
                description: 'Easy Mexican recipe stuffed with taco meat and topped with all of your favorite toppings. This is a Keto and low-carb recipe!',
                ingredients: ['1/2 lb ground beef','2 tablespoons taco seasoning','2 large avocados ', '1/2 cup shredded cheddar cheese', '1/4 cup red enchilada sauce','toppings: sour cream, salsa, cilantro'],
                concerns: ['Olive Oil', 'Vegetables'],
                skintype: ['Lactose free']
            }
        ]
    }

    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>

                <Jumbotron>
                    <CardColumns>
                        <CleanserCards products={this.state.cleansers} />
                    </CardColumns>
                </Jumbotron> 

            </Container>
        )
    }
}

export default Results