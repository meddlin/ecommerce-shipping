import React, { Component } from 'react';
import { Order } from './_components/Order/Order';

export class Dashboard extends Component {
    
    render() {
        return (
            <div>
                <p>Dashboard</p>

                <hr />

                <Order />
            </div>
        );
    } 
}