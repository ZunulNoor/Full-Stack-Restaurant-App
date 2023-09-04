import React, { useContext } from 'react'
import './custom.css'
import { CartContext } from '../../CartContext/context'
import { GlobalContext } from '../../../Context/context'
import { decodeToken } from 'react-jwt'
import axios from 'axios'

export default function CustomCart() {

    const { cart_state, cart_dispatch } = useContext(CartContext)
    const { state, dispatch } = useContext(GlobalContext)
    const currentUser = decodeToken(state.token)

    const placeOrder = () => {
        const payload = {
            customerName: currentUser.username,
            customerId: currentUser.id,
            customerEmail: currentUser.email,
            customerAddress: currentUser.address,
            customerContact: currentUser.contact,
            order: cart_state.cart
        }
        axios.post('/api/place-order', payload)
            .then((json) => console.log(json.data))
            .catch(err => console.log(err.message))
    }

    return (

        <div className='p-5' style={{ height: '100vh', width: '100%' }}>
            <div className="container d-flex justify-content-center" >
                <div className="master-container">
                    <div className="card cart">
                        <label className="title">Your cart</label>
                        <div className="products">
                            {
                                cart_state.cart.map((val, key) => <div key={key} className="product">
                                    <div>
                                        <img src={val.thumbnail} alt="" style={{ height: '10vh', objectFit: 'contain' }} />
                                    </div>
                                    <div className="quantity">
                                        <label>{val.quantity}</label>

                                    </div>
                                    <label className="price small">{val.price}</label>
                                </div>)
                            }

                        </div>
                    </div>


                </div>

            </div>

            <div className=" d-flex justify-content-center mt-5">
                <button className="w-25 btn btn-dark mb-4" onClick={placeOrder}>Place Order</button>
            </div>
        </div>

    )
}