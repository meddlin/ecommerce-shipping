import React, { Component } from 'react';
import { Order } from './_components/Order/Order';
import orders from './order-data';

export class Dashboard extends Component {
    
    render() {
        const _orders = orders;

        return (
            <div>
                <p>Dashboard</p>

                <ul>
                    {_orders.map(o => <li key={o.productId}>{o.productName}</li>)}
                </ul>

                <hr />

                <Order />
            </div>
        );
    } 
}