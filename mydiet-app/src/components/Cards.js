import React from 'react'
import {Card,Button} from 'react-bootstrap'

import Img1 from "../img/cauliflower_potato_salad.jpg"
import Img2 from "../img/delivered_eggs.jpg"
import Img3 from "../img/chicken_salad.jpg"
import Img4 from "../img/bakedstauffedavocado.jpg"
import Img5 from "../img/5.jpg"
import Img6 from "../img/6.jpg"
import Img7 from "../img/7.jpg"
import Img8 from "../img/8.jpg"
import Img9 from "../img/9.jpg"
import Img11 from "../img/11.jpg"
import Img14 from "../img/14.jpg"

function getImage (id) {
    switch (id) {
        case 1: return Img1;
        case 2: return Img2;
        case 3: return Img3;
        case 4: return Img4;
        case 5: return Img5;
        case 6: return Img6;
        case 7: return Img7;
        case 8: return Img8;
        case 9: return Img9;
        case 11: return Img11;
        case 14: return Img14;
        default: break;
      }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


const Cards = ({products}) => {

    const handleNightClick = (product) => {
        //console.log(product);
        setCookie('nightProduct'+product.id,JSON.stringify(product),1);
    };
    const handleDayClick = (product) => {
        //console.log(product);
        setCookie('dayProduct'+product.id,JSON.stringify(product),1);
    };

    const productsCards = products.length ? (
        products.map (product => {
            return (
                <Card border="warning" style={{ width: '100%' }} key={product.id}>

                    <Card.Img variant="top" src={getImage(product.id)} />
                    <Card.Header>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.brand}</Card.Subtitle>
                    </Card.Header>
                    <Card.Body variant="pull-right px-2">
                        <Card.Text>
                            <b>Description: </b> {product.description}<br/>
                        </Card.Text>
                        <Card.Text>
                            <b>Restrictions :</b> {product.skintype.join(', ')}<br/>
                            <b>Preferences : </b> {product.concerns.join(', ')}<br/>
                            <b>Ingredients: </b> {product.ingredients.join(', ')}<br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="warning" onClick={() => {handleDayClick(product)}}>Watch Video</Button><p></p>
                        <Button variant="info" onClick={() => {handleNightClick(product)}}>About Calories</Button>
                    </Card.Footer>
                </Card> 
            )
        })
    ) : (
        <p className="center">No products available.</p>
    );

    return (
        <div className="products" key={Math.random}>
            {productsCards}
        </div>
    )
}

export default Cards