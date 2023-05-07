import React from 'react'
// import backgroundImg from "../../assets/restaurant.jpg"
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='vw-100'>
            <div className="container m-0">
                <div className="row vh-100 vw-100">
                    <div className="picture col-md-5">

                    </div>
                    <div className="enter col-md-7 d-flex justify-content-center">
                        <div className="welcome col-md-7 text-center m-auto">
                            <Link to="/menu">
                                <h1 className='pt-3'>Welcome</h1>
                                <h5>A culinary journey</h5>
                                <p><u>Enter</u></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home