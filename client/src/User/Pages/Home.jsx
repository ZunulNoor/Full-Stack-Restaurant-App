import React from 'react'
import Category from './Category'
import Contact from '../../Guest/Components/Contact'
import Review from '../Components/Review'


export default function Home() {
  return (
    <>
      <section className="banner" id="baner">
        <div className="content">
          <h2>Always Choose The Best</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            doloremque nisi et facere impedit, sint distinctio soluta saepe
            laborum dolorum quia uptatibus
          </p>
          <a href="/menu" className="menubtn">Our Menu &#8594;</a>
        </div>
      </section>
      <section className="about" id="about">
        <div className="rowabout">
          <div className="col-about">
            <h2 className="titletext">
              <span>A</span>bout Us
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              dignissimos rerum ipsum porro neque accusantium blanditiis modi ex,
              voluptatem facilis aliquid dolor nulla nemo. Nemo totam vel aspernatur,
              assumenda sequi dolor. Beatae fugit maiores nihil explicabo sit officia
              necessitatibus repellendus nostrum, incidunt velit ipsa inventore eum
              commodi facilis qui debitis id neque quo quidem reprehenderit, non
              consequatur.
            </p>
          </div>
          <div className="col-about">
            <img src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/values/values-2020/img/hero-burrito-lg.png" />
          </div>
        </div>
        </section>
        <Category />
        <Contact />
        <Review />
      <section>
        <div className="zun" >
            <p className='text-dark fw-bold'>Designed & Developed By <span className='text-success fw-bold'>Zun Ul Noor <span className='text-dark fs-1'>.</span></span></p>
        </div>
      </section>
    </>
  )
}
