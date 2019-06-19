import React, { Component } from 'react';
import { withFormik, Form } from 'formik';
import { orderActions } from '../../_actions';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { store } from '../../_helpers';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

class OrderForm extends Component {
    render() {
        const {
            values,
            touched,
            errors,
            dirty,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isSubmitting
        } = this.props;

        return (
            <Form>
                <TextField
                    name="productId"
                    label="Product Id"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productId} />
                {(touched.productId && errors.productId) ? <div>{errors.productId}</div> : ""}

                <TextField
                    name="productName"
                    label="Product Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productName} />
                {(touched.productName && errors.productName) ? <div>{errors.productName}</div> : ""}

                <TextField
                    name="maxBusinessDaysToShip"
                    label="Max Bus. Days To Ship"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.maxBusinessDaysToShip} />
                {(touched.maxBusinessDaysToShip && errors.maxBusinessDaysToShip) ? <div>{errors.maxBusinessDaysToShip}</div> : ""}

                <TextField
                    name="orderDate"
                    label="Order Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.orderDate} />
                {(touched.orderDate && errors.orderDate) ? <div>{errors.orderDate}</div> : ""}

                <TextField
                    name="shipDate"
                    label="Ship Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.shipDate} />
                {(touched.shipDate && errors.shipDate) ? <div>{errors.shipDate}</div> : ""}
                
                <PrimaryButton 
                    type="submit"
                    text="Submit" />
            </Form>
        );
    }
};

const formikEnhancer = withFormik({
    mapPropsToValues({ productId, productName, maxBusinessDaysToShip, orderDate, shipDate }) {
        return {
            productId: productId || '',
            productName: productName || '',
            maxBusinessDaysToShip: maxBusinessDaysToShip || '',
            orderDate: orderDate || '',
            shipDate: shipDate || ''
        }
    },
    validationSchema: Yup.object().shape({
        orderDate: Yup.string().required('Order Date is required')
        
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        let { productId, productName, maxBusinessDaysToShip, orderDate, shipDate } = values;

        if (!shipDate) shipDate = new Date();
        if (!maxBusinessDaysToShip) maxBusinessDaysToShip = 1;

        store.dispatch(orderActions.checkShipDate({ productId, productName, maxBusinessDaysToShip, orderDate, shipDate }));

        setSubmitting(false);
    }
})(OrderForm);

function mapStateToProps(state) {
    const { product } = state.order;
    return {
        product: product
    };
}

const OrderFormConnection = connect(mapStateToProps)(formikEnhancer);
export { OrderFormConnection as OrderForm };