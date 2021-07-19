import React,{Component} from 'react';
import {Container,Jumbotron,CardColumns} from 'react-bootstrap'
import Keto from  "../img/keto.jpg";
import CleanserCards from "./Cards";

class Cleanse extends Component {
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
                id:2,
                type: 1,
                brand: 'KETO, LOW-CARB',
                name: 'DEVILED EGGS RECIPE',
                description: 'Classic side dish or appetizer for Easter, Christmas, or any occasion. This the best recipe made with simple ingredients but can be spiced up with many variations.',
                ingredients: ['6 large eggs','1/4 cup mayonnaise','1 teaspoon yellow mustard','1 teaspoon white vinegar','salt and pepper to taste','paprika for garnish'],
                concerns: ['Olive Oil'],
                skintype:['Sugar free']
            },
            {
                id:3,
                type: 1,
                brand: 'KETO, LOW-CARB',
                name: 'CHICKEN SALAD RECIPE',
                description: 'Chicken Salad recipe is flavorful with simple ingredients. Chicken, celery, mayonnaise, green onions, and a little lemon juice make this salad taste like heaven. ',
                ingredients: ['3 cups cooked chicken, diced','1/2 cup mayonnaise','1/2 cup finely chopped celery','1/3 cup sliced green onions','2 teaspoons lemon juice','1/2 teaspoon kosher salt'],
                concerns: ['Olive Oil', 'Vegetables', 'Salad'],
                skintype: ['No restrictions']
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
                    <h1><img src={Keto} alt="Logo"/> KETO diet</h1>
                    <p> KETO diet or "Ketogenic" diet. It is a term for a low-carb diet (like the Atkins diet). The idea is for you to get more calories from protein and fat and less from carbohydrates. You cut back most on the carbs that are easy to digest, like sugar, soda, pastries, and white bread.
                    </p> 
                </Jumbotron> 

                <Jumbotron>
                    <CardColumns>
                        <CleanserCards products={this.state.cleansers} />
                    </CardColumns>
                </Jumbotron> 

            </Container>
        )
    }
}



export default Cleanse