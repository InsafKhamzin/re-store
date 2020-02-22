import React from 'react';
import { connect } from 'react-redux';
import { bookDeletedFromCart, bookAddedToCart, bookDecreaseCount } from '../../actions';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, idx) => {
                            const { id, title, count, total } = item;
                            return (
                                <tr key={id}>
                                    <td>{idx + 1}</td>
                                    <td>{title}</td>
                                    <td>{count}</td>
                                    <td>${total}</td>
                                    <td>
                                        <button
                                            onClick={() => onIncrease(id)}
                                            className="btn btn-outline-success btn-small">
                                            <i className="fa fa-plus-circle" />
                                        </button>
                                        <button
                                            onClick={() => onDecrease(id)}
                                            className="btn btn-outline-warning btn-small">
                                            <i className="fa fa-minus-circle" />
                                        </button>
                                        <button
                                            onClick={() => onDelete(id)}
                                            className="btn btn-outline-danger btn-small">
                                            <i className="fa fa-trash-o" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(bookAddedToCart(id)),
        onDecrease: (id) => dispatch(bookDecreaseCount(id)),
        onDelete: (id) => dispatch(bookDeletedFromCart(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);