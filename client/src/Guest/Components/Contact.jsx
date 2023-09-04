import React from 'react'
import { TbBrandFacebookFilled } from 'react-icons/tb'
import { RiInstagramLine } from 'react-icons/ri'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
export default function Contact() {
    return (
        <>
            <section>
                <div className=" d-flex justify-content-center align-items-between">
                    <div className='animate__animated animate__bounceInLeft'>
                        <h2 className='Contact'>
                            Reach <span>US</span>
                        </h2>
                    </div>
                </div>
                <div className=" d-flex justify-content-center align-content-center">
                    <div className='animate__animated animate__bounceInRight '>
                        <ul className='social'>
                            <p><a href="https://www.facebook.com/zun.noor.54?mibextid=ZbWKwL"><TbBrandFacebookFilled /></a></p>
                            <p><a href="https://github.com/ZunulNoor"><FaGithub /></a></p>
                            <p><a href="https://www.linkedin.com/in/zun-ul-noor-noor-864a88274"><FaLinkedin /></a></p>
                            <p><a href="https://instagram.com/zun_ul_noor?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"><RiInstagramLine /></a></p>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}