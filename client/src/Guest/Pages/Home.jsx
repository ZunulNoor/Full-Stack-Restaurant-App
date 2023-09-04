import React from 'react'
import Category from '../Components/Category'
import GuestNav from '../Components/GuestNav'
import Contact from '../Components/Contact'

export default function Home() {
    return (
        <div>
            <GuestNav />
            <section class="banner" id="baner">
                <div class="content">
                    <h2>Always Choose The Best</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        doloremque nisi et facere impedit, sint distinctio soluta saepe
                        laborum dolorum quia uptatibus
                    </p>
                    <a href="#" class="menubtn">Our Menu &#8594;</a>
                </div>
            </section>
            <section className="about" id="about">
                <div className="row">
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
            <div className="zun">
                <p>Designed & Developed By <a>Zun Ul Noor.</a></p>
            </div>
        </div>
    )
}