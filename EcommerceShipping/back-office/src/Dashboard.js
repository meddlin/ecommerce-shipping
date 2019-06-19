import React, { Component } from 'react';
import { Order } from './_components/Order/Order';
import products from './product-data';

export class Dashboard extends Component {
    
    render() {
        const _products = products;
        const styles = {
            flex: {
                display: 'flex',
                flexDirection: 'row'
            },
            left: {
                flexGrow: 1
            },
            right: {
                flexGrow: 1
            }
        };

        return (
            <div>
                
                <h3>Product List</h3>
                <div style={styles.flex}>
                    <div style={styles.left}>
                        <ul>
                            {_products.map(p => <li key={p.productId}>{p.productName}</li>)}
                        </ul>
                    </div>
                    <div style={styles.right}>
                        <Order />
                    </div>
                </div>
            </div>
        );
    } 
}