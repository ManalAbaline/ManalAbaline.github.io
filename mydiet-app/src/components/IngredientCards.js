import React from 'react'
import {Card} from 'react-bootstrap'


function getImage (id) {
    switch (id) {
        default: break;
      }
}

const Cards = ({products}) => {

    const productsCards = products.length ? (
        products.map (product => {
            return (
                <Card border="warning" style={{ width: '100%' }} key={product.id}>

                    <Card.Img variant="top" src={getImage(product.id)} />
                    <Card.Header>
                        <Card.Title>{product.name}</Card.Title>
                    </Card.Header>
                    <Card.Body variant="pull-right px-2">
                        <Card.Text>
                            <b>Description: </b> {product.description}<br/>
                        </Card.Text>
                        <Card.Text>
                            <b>Skin Types: </b> {product.skintype.join(',')}<br/>
                            <b>Concerns: </b> {product.concerns.join(', ')}<br/>
                        </Card.Text>
                    </Card.Body>
                </Card> 
            )
        })
    ) : (
        <p className="center">No ingredients match your quiz results. Sorry.</p>
    );

    return (
        <div className="products" key={Math.random}>
            {productsCards}
        </div>
    )
}

export default Cards