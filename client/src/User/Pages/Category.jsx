import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
export default function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('/api/get-all-categories')
            .then(json => setCategory(json.data.category))
            .catch(err => alert(err.message))

    }, [])

    return (
        <div className="container">
            <div className="my-5 text-center">
                <h2 className='menu fw-bolder'>We<span className='spanMenu'> Serve In</span></h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row ms-5">
                {
                    category.map((val, key) =>
                        <div className="col-md-4 my-2" key={key}>
                            <Link className='text-decoration-none' >
                                <Card>
                                    <Card.Img variant="top" src={val.CategoryImage} />
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bolder fs-3'>{val.CategoryName}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    )
                }
            </div>
            <div className="d-flex justify-content-center">
                <a href="/menu" className="menubtn">Order Now &#8594;</a>
            </div>
        </div>
    )
}