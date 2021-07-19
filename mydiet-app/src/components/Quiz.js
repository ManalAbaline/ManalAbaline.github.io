import React,{Component} from 'react';
import {Container,Jumbotron,Form,Button} from 'react-bootstrap'
import Question from "../img/question.jpg";


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

class Quiz extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        // var skinType = e.target.skinType.value;
        // var pores = e.target.pores.checked;
        // var oil =  e.target.oil.checked;
        // var blackheads =  e.target.blackheads.checked;
        // var acne =  e.target.acne.checked;
        // var wrinkles =  e.target.wrinkles.checked;
        // var fineLines =  e.target.fine_lines.checked;
        // var dryness =  e.target.dryness.checked;
        // var redness =  e.target.redness.checked;
        // var dark_circles =  e.target.dark_circles.checked;
        // var hyperpigmentation =  e.target.hyperpigmentation.checked;
        // var sun = e.target.sun.checked;

        // var cvalue = skinType+","+pores+","+oil+","+blackheads+","+acne+","+wrinkles+","+fineLines+","+dryness+","+redness+","+dark_circles+","+hyperpigmentation+","+sun;

        // setCookie('quiz',cvalue,1);

        window.location.replace('/results');

    }

    render() {
            return (
            <Container key={Math.random}>
            <br/><br/>

                <Jumbotron>
                    <h1><img src={Question} alt="Result"/> Quiz</h1>
                </Jumbotron> 

                <Jumbotron>

                <form onSubmit={this.handleSubmit}>

                    <Form.Group >
                        <Form.Label className="quizLabel">What are your restrictions</Form.Label><br/><br/>

                        {['Vegetarian', 'Lactose free','Sugar free', 'No restrictions'].map((value) => (
                            <div key={Math.random()} className="quizOption mb-3">
                              <input type='radio' name="skinType" value={value}/>
                              <label>{value}</label>
                            </div>
                          ))}

                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="quizLabel">What are your preferences?</Form.Label><br/><br/>
                        {['Olive oil', 'Vegetables', 'Chicken Breast', 'Grounded Chicken', 'Grounded Beef', 'Fish', 'Salad'].map((value) => (
                            <div key={Math.random()} className="quizOption mb-3">
                              <input type='checkbox' name={value} />
                              <label>{value}</label>
                            </div>
                          ))}
                    </Form.Group>

                    <Button className="right" type="submit" variant="info">See Results </Button>

                </form>
                        
                </Jumbotron> 
                

            </Container>
        )
    }
}

export default Quiz