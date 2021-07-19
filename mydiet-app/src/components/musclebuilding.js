import React,{Component} from 'react';
import {Container,Jumbotron, CardColumns} from 'react-bootstrap'
import Sparkle from "../img/sparkle.jpg";
import TreatementCards from "./Cards";

class Treatement extends Component {
    state = {
        treatements : [
            {
                id:5, 
                type: 2, 
                brand: 'High protein meal',
                name: 'Steak and Bean Burrito Bowl',
                description: 'What better way to eat some of our favorite protein-packed foods—black beans and grass-fed beef—than in a burrito bowl.',
                ingredients: ['4 3- ounce steaks', '4 cups romaine lettuce', '½ cup Mexican blend or mozzarella cheese','1/2 cup sour cream','1/2 cup thinly sliced onions', '1 cup black beans'  ],
                concerns: ['Olive Oil', 'Vegetables', 'Chicken Breast'],
                skintype:['No restrictions']
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
                id: 8,
                type: 2, 
                brand: "High protein meal",
                name: "Grilled Halibut & Tomato Salsa",
                description: 'Contains a combination of being high in protein, high in omega-3 fatty acids, and low in mercurys. halibut ranks the second most filling food—bested only by boiled potatoes—likely because it packs such an impressive protein punch',
                concerns: ['Vegetables'],
                skintype:['No restrictions'],
                ingredients: ['2 6- ounce halibut filets','extra virgin olive oil','kosher salt and freshly ground black pepper']
            },
            {
                id: 9,
                type: 2, 
                brand: "High protein meal",
                name: "Chicken Tikka Masala",
                description: 'Who knew you could whip up a Tikka Masala in under 30 minutes? Whip this meal up after your post-work workout to reap its muscle-toning benefits.',
                concerns: ['Vegetables', 'Chicken Breast', 'Olive oil'],
                skintype:['No restrictions'],
                ingredients: ['Fresh ginger','Garlic','Yellow onion', 'Boneless skinless chicken breasts', 'Spices including Garam Masala, paprika, and cayenne pepper', 'Plain Greek yogurt or heavy cream', 'Fresh cilantro']
            }
        ]
    }
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Sparkle} alt="Logo"/> Muscle Building Diet</h1>
                    <p>Bodybuilding is centered around building your body’s muscles through weightlifting and nutrition. Whether recreational or competitive, bodybuilding is often referred to as a lifestyle, as it involves both the time you spend in and outside the gym. In order to maximize your results from the gym, you must focus on your diet, as eating the wrong foods can be detrimental to your bodybuilding goals.
                    </p> 
                </Jumbotron> 

                <Jumbotron>
                    <CardColumns>
                        <TreatementCards products={this.state.treatements} />
                    </CardColumns>
                    
                </Jumbotron> 

            </Container>
        )
    }
}

export default Treatement