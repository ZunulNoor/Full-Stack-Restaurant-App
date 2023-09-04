import React, { useEffect, useState } from 'react'
import CategoryModal from '../Components/CategoryModal'
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
    <>
      <div className="container">
        <div className='d-flex justify-content-between align-items-center bg-success p-2 my-3 rounded'>
          <span className='fs-4 fw-bold text-white ms-2'>Categories</span>
          <CategoryModal />
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
      </div>
    </>
  )
}
