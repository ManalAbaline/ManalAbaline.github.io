import React from 'react'
import {Card,Button} from 'react-bootstrap'

import Img1 from "../img/1.jpg"
import Img2 from "../img/2.jpg"
import Img3 from "../img/3.jpg"
import Img4 from "../img/4.jpg"
import Img5 from "../img/5.jpg"
import Img6 from "../img/6.jpg"
import Img7 from "../img/7.jpg"
import Img8 from "../img/8.jpg"
import Img9 from "../img/9.jpg"
import Img10 from "../img/10.jpg"
import Img11 from "../img/11.jpg"
import Img12 from "../img/12.jpg"  
import Img13 from "../img/13.jpg"
import Img14 from "../img/14.jpg"
import Img15 from "../img/15.jpg"
import Img16 from "../img/16.jpg"

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
        case 10: return Img10;
        case 11: return Img11;
        case 12: return Img12;
        case 13: return Img13;
        case 14: return Img14;
        case 15: return Img15;
        case 16: return Img16;
        default: break;
      }
}


const Cards = ({products,time}) => {

    const handleClick = (product) => {
        console.log(product);
        //setCookie('nightProduct'+product.id,JSON.stringify(product),1);

        document.cookie = time+"Product"+product.id+"= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        window.location.reload(false);
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
                            <b>Skin Types: </b> {product.skintype.join(', ')}<br/>
                            <b>Concerns: </b> {product.concerns.join(', ')}<br/>
                            <b>Ingredients: </b> {product.ingredients.join(', ')}<br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="danger" onClick={() => {handleClick(product)}}>Remove</Button>
                    </Card.Footer>
                </Card> 
            )
        })
    ) : (
        <p className="center">No products have been selected.</p>
    );

    return (
        <div className="products" key={Math.random}>
            {productsCards}
        </div>
    )
}

export default Cards