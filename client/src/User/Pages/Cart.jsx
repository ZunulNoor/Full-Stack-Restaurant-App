import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext/context'
import { GlobalContext } from '../../Context/context'
import { decodeToken } from 'react-jwt'
import axios from 'axios'
import { FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'
import 'animate.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Cart() {

    const { cart_state, cart_dispatch } = useContext(CartContext)
    const { state, dispatch } = useContext(GlobalContext)
    const total = cart_state.cart.reduce((accumulator, menu) => accumulator + (menu.price * menu.quantity), 0)
    const currentUser = decodeToken(state.token)

    const removeitem = (itemId) => {
        cart_dispatch({
            type: "DELETE_ITEM",
            payload: itemId
        });
    };
    const checkout = () => {
        const payload = {
            customerName: currentUser.username,
            customerId: currentUser.id,
            customerEmail: currentUser.email,
            customerAddress: currentUser.address,
            customerContact: currentUser.contact,
            items: cart_state.cart,
            totalBill: total
        }
        cart_dispatch({
            type: "CHECKOUT"
        })
        Swal.fire({
            title: 'ThankYou!',
            text: 'Check Your Mail',
            icon: 'success',
            confirmButtonText: 'Done',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
        axios.post('/api/place-order', payload)
            .then((json) => console.log(json.data))
            .catch(err => console.log(err.message))
    }

    return (
        <div className="container">
            <div className="text-center my-5">
                <h2>Your <span className='text-success fw-bold'>C</span>art</h2>
            </div>

            <div className="p-5 rounded">
                {
                    cart_state.cart.map((val, key) =>
                        <div key={key} className='d-flex justify-content-around p-2'>

                            <Card style={{ width: '18rem' }} >
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Name : {val.itemName}</ListGroup.Item>
                                    <ListGroup.Item>Price : {val.price}</ListGroup.Item>
                                    <ListGroup.Item>Quantity : {val.quantity}</ListGroup.Item>
                                </ListGroup>
                                <span onClick={() => removeitem(val._id)} className='btn position-absolute top-0 start-100 translate-middle badge rounded bg-danger'>
                                    <FaTrash />
                                </span>
                            </Card>
                        </div>
                    )
                }
                <div className="px-5 py-3 rounded d-flex justify-content-around align-items-center">
                    <h5>Total</h5>
                    <div>
                        <h6>
                            {total}
                        </h6>
                    </div>
                </div>

                <div className="d-flex justify-content-center container mt-3">
                    <button className="w-50 btn btn-dark" onClick={checkout}>CheckOut</button>
                </div>


            </div>
        </div >
    )
} 