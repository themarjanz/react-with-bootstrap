import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Laptop 1', price: 123000 },
        { id: 2, name: 'Laptop 2', price: 123000 },
        { id: 3, name: 'Laptop 3', price: 123000 }
    ]
    return (
        <div>
            <h2>This is my card</h2>
            <div className="card-group">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}>

                    </Card>)
                }

            </div>
        </div>
    );
};

export default CardGroup;