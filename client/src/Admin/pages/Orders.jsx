import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';


export default function Category() {

    const [orders, setOrder] = useState([])
    const { _id } = useParams()
    useEffect(() => {
        axios.get('/api/get-all-orders')
            .then(json => setOrder(json.data.orders))
            .catch(err => alert(err.message))

    }, [])

    return (
        <div className="container">
            <div className="my-5 text-center">
                <h2 className='menu fw-bolder'>0<span className='spanMenu'>rders</span></h2>
            </div>

            <div className="row ms-5">
                {
                    orders.map((val, key) =>
                        <div className="col-md-4 my-2" key={key}>
                            <Card style={{ width: '18rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{val.customerName}</ListGroup.Item>
                                    <ListGroup.Item>{val.customerEmail}</ListGroup.Item>
                                    <ListGroup.Item>{val.customerContact}</ListGroup.Item>
                                    <ListGroup.Item>{val.customerAddress}</ListGroup.Item>
                                    <ListGroup.Item>ID : {val._id}</ListGroup.Item>
                                    <ListGroup.Item>Order Time : {val.order_at}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    )
}