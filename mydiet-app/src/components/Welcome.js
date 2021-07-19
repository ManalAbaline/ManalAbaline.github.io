import React from 'react'
import {Container,Jumbotron,Button} from 'react-bootstrap'

const Welcome = () => {
    return (
        <Container key={Math.random}>
        <br/><br/>
            <Jumbotron>
                <h1>Welcome to <i>EasyHmeals</i>,</h1>
                <br/>
                <p> We are your virtual assistant to have the right lifestyle and promote the athlete mindset. Eat well, train well and be happy with us! In this website, we present healthy meals for three tyes of diets: KETO, Muscle Building and Weight Loss. We also offer you the option to customize your meals depending on your restrictions.</p> 
                <br/><br/>
                <Button variant="warning" href="/quiz" block>Take the Quiz</Button>
            </Jumbotron> 
        </Container>
    )
}

export default Welcome