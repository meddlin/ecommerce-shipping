import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OrderForm } from './OrderForm';
import styles from '../../_styling/styles';

class Order extends Component {
    render() {
        const { product } = this.props;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Check Product Ship Date</h2>

                <p>
                    Ship Date: <em>{(product && product.shipDate) ? new Date(product.shipDate).toDateString() : ''}</em>
                </p>

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

function mapStateToProps(state) {
    const { product } = state.order;
    return {
      product: product
    };
}

const connectedOrder = connect(mapStateToProps)(Order);
export { connectedOrder as Order };