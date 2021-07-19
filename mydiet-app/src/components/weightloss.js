import React,{Component} from 'react';
import {Container,Jumbotron, CardColumns} from 'react-bootstrap'
import Water from "../img/water.jpg";
import MoisturizeCards from "./Cards";

class Moisturize extends Component {
    state = {
        moisturizers : [
            {
                id:11,
                type: 3, 
                brand: 'Weight Loss',
                name: 'Slow Grilled Chinese Char Siu Chicken',
                description: 'Easy recipe and tastes great!',
                concerns: ['Vegetables', 'Chicken Breast', 'Olive oil'],
                skintype:['No restrictions'],
                ingredients: ['1/4 c. organic brown sugar', '1/4 c. raw honey', '1/4 c. organic ketchup', '1/4 c. gluten-free soy sauce', '2 1/2 lbs boneless skinless chicken thighs']
            },

            {
                id: 14,
                type: 3, 
                brand: "Weight Loss",
                name: "Loaded Cauliflower",
                description: 'This healthy loaded cauliflower tastes like loaded potato skins without all the carbs. Made with butter, sour cream, chives, cheddar cheese and bacon, it’s the ultimate side for keto diets.',
                concerns: ['Vegetables','Olive oil'],
                skintype:['No restrictions'],
                ingredients: ['1.25 lb cauliflower head, cut into florets','6 green onion, chopped into the green and white parts', '2 tbsp butter', '3 garlic cloves, minced', '2 oz cream cheese', '1/2 tsp sea salt', '2 c. cheddar cheese, grated', '4 slices sugar-free bacon, crumbled' ]
            }
        ]
    }
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Water} alt="Logo"/> Weight Loss Diet</h1>
                    <p> These are meals to help you lose weight. More meals will be added shortly!
                    </p> 
                </Jumbotron> 

                <Jumbotron>
                <CardColumns>
                        <MoisturizeCards products={this.state.moisturizers} />
                    </CardColumns>
                    
                </Jumbotron> 

            </Container>
        )
    }
}

export default Moisturize