import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
export default function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('/api/get-all-categories')
            .then(json => setCategory(json.data.category))
            .catch(err => alert(err.message))

    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2 className='menu'>M<span className='spanMenu'>enu</span></h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row ms-5">
                {
                    category.map((val, key) =>
                        <div className="col-md-4 my-2" key={key}>
                                <Card>
                                    <Card.Img variant="top" src={val.CategoryImage} />
                                    <Card.Body>
                                        <Card.Title>{val.CategoryName}</Card.Title>
                                    </Card.Body>
                                </Card>
                        </div>
                    )
                }
                <div className="d-flex justify-content-center">
                    <a href="/login" className="menubtn">Order Now &#8594;</a>
                </div>
            </div>
        </div>
    )
}