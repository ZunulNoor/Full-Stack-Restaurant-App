import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../CartContext/context'
import Swal from 'sweetalert2'
import 'animate.css'
export default function ProductPage() {

    const { _id } = useParams()
    const [menu, setMenu] = useState({})
    const [quantity, setQuantity] = useState(1)

    const { cart_state, cart_dispatch } = useContext(CartContext)

    useEffect(() => {
        axios.get(`/api/get-item-by-id/${_id}`)
            .then((json) => setMenu(json.data.menu))
            .catch(err => console.log(err))
    }, [])

    const addtocart = () => {
        const existingItemIndex = cart_state.cart.findIndex(item => item._id === menu._id)
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart_state.cart]
            updatedCart[existingItemIndex].quantity += quantity
            cart_dispatch({
                type: "UPDATE_CART", 
                payload: updatedCart
            })
        } 
        else {
            const payload = { ...menu, quantity }

            cart_dispatch({
                type: "ADD_TO_CART",
                payload
            })
        }
        Swal.fire({
            title: 'Success!',
            text: 'Added to Cart',
            icon: 'success',
            confirmButtonText: 'Done',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

    }

    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <div className='productcard'>
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <img src={menu.thumbnail} className='img-fluid rounded border mt-5' style={{ width: '60%' }} />

                        </div>
                        <div className='d-flex justify-content-center mt-3 text-white fst-italic '>
                            <h4>{menu.itemName} - {menu.price} PKR</h4>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className="col-md-4 py-5">
                                <div className='d-flex justify-content-around align-items-center  py-4 rounded'>
                                    <button className="btn btn-light text-success fw-bold" disabled={quantity <= 1 ? true : false} onClick={() => setQuantity(quantity - 1)}>-</button>
                                    <div className='text-white fw-bolder'>
                                        {quantity}
                                    </div>
                                    <button className="btn btn-light text-success fw-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>

                                <div className='d-block'><button className="btn btn-light text-success fw-bold" onClick={addtocart}>Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}