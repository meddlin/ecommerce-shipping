import React, { Component } from 'react';
import { OrderForm } from './OrderForm';
import styles from '../../_styling/styles';

export class Order extends Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Order</h2>

				<div style={styles.formStyles.top} className="ms-Grid" dir="ltr">
					<div className="ms-Grid-row">
						<div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4 ms-mdPush4 ms-lgPush4">
							<OrderForm />
						</div>
					</div>
				</div>
            </div>
        );
    }
};