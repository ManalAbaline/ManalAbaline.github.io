import React from 'react'
import {Container,Jumbotron,Button} from 'react-bootstrap'

const Bienvenue = () => {
    return (
        <Container key={Math.random}>
        <br/><br/>
            <Jumbotron>
                <h1>Bienvenue à <i>EasyHmeals</i>,</h1>
                <br/>
                <p>Nous sommes votre assistant virtuel pour avoir le bon style de vie et promouvoir l'état d'esprit des athlètes. Mangez bien, entraînez-vous bien et soyez heureux avec nous ! Sur ce site Web, nous présentons des repas sains pour trois types de régimes : KETO, renforcement musculaire et perte de poids. Nous vous offrons également la possibilité de personnaliser vos repas en fonction de vos restrictions.</p> 
                <br/>
                <Button variant="warning" href="/quiz" block>Faire le Quiz</Button>
            </Jumbotron> 
        </Container>
    )
}

export default Bienvenue