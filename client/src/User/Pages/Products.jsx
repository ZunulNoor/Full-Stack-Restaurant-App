import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
export default function Products() {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get('/api/get-all-menu')
            .then(json => setMenu(json.data.menu))
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div className="container">
            <div className="my-5 text-center">
                <h1>M<span className='menuspan'>e</span>nu</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas, at tempora magnam earum accusamus.</p>
            </div>
            <div className="row">
                {
                    menu.map((val, key) =>
                        <div className="col-md-3 my-2" key={key}>
                            <Card>
                                <Card.Img variant="top" src={val.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{val.itemName}-{val.price} Pkr</Card.Title>
                                    {val.category} <span className='ms-2'> -</span>
                                    <Link className='text-decoration-none' to={`/menu/${val._id}`}>
                                        <button className='btn btn-dark ms-3'>Add to Cart</button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
            <h3 className='d-flex justify-content-center mt-4 fst-italic fw-bold'>More Soon . <span className='text-success fw-bold'>.</span> .</h3>
        </div>
    )
}