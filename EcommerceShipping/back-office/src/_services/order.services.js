export const orderService = {
    createOrder,
    checkShipDate
};

const config = {
	apiUrl: process.env.REACT_APP_API_URL || 'https://localhost:5001'
};

function createOrder(order) {
    setTimeout(() => {console.log('simulating server...'); return true;}, 1000);
}

function checkShipDate(product) {
	let user = JSON.parse(localStorage.getItem('user'));

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    return fetch(`${config.apiUrl}/api/Products/shipdate`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                Location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}