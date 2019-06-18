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
    mapPropsToValues({ orderDate, shipDate }) {
        return {
            orderDate: orderDate || '',
            shipDate: shipDate || ''
        }
    },
    validationSchema: Yup.object().shape({
        orderDate: Yup.string().required('Order Date is required'),
        shipDate: Yup.string().required('Ship Date is required')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        const { orderDate, shipDate } = values;
        if (orderDate && shipDate)
            store.dispatch(orderActions.save(orderDate, shipDate));

        setSubmitting(false);
    }
})(OrderForm);

function mapStateToProps(state) {
    const { order } = state;
    return {
        order: order
    };
}

const OrderFormConnection = connect(mapStateToProps)(formikEnhancer);
export { OrderFormConnection as OrderForm };