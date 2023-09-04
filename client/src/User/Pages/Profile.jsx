import React from 'react'
import ProfileCard from '../Components/ProfileCard'

export default function Profile() {
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center" style={{ height: '90vh', width: '100 %' }}>
                <div className="col-md-4">
                </div>
                <div className="col-md-7">
                    <ProfileCard />
                </div>
            </div>
        </div>
    )
}