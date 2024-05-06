import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Orders() {

    const [orders, setOrders] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/orders")
            .then(function (response) {
                //setOrders(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    function createOrder() {
        axios.post("http://localhost:8080/orders")
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container">
            <h1>Orders</h1>
            <div className="text-end">
                <button type="button" onClick={createOrder} className="btn btn-primary ">Create Order</button>
            </div>

            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Date and Time</th>
                        <th>Total Items</th>
                        <th>Total Prize</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {orders && orders.map((orders) => (
                        <tr key={orders.id}>
                            <td>{orders.id}</td>
                            <td>{orders.orderDate}</td>
                            <td>{orders.orderedProducts.length}</td>
                            <td>{orders.totalPrice}</td>
                            <td><button className="btn btn-primary btn-sm">edit</button></td>
                        </tr>
                    ))}

                    <tr>
                    <td>O001</td>
                    <td>10</td>
                    <td>123</td>
                    <td>123</td>
                    <td><button className="btn btn-primary btn-sm">edit</button></td>
                    </tr>
                    <tr>
                    <td>O001</td>
                    <td>10</td>
                    <td>123</td>
                    <td>123</td>
                    <td><button className="btn btn-primary btn-sm">edit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
export default Orders;
// orders page