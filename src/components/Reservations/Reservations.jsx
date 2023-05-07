import React, { useState } from 'react'
import "./Reservations.css"
import {BsFillSendFill, BsFillEnvelopeFill, BsFillPersonFill, BsFillPeopleFill, BsFillTelephoneFill} from "react-icons/bs"
import Alert from '../Alert/Alert'
import { Navigate, useNavigate } from 'react-router-dom'


const Reservations = () => {
    const initialState = {
        name: "",
        phone: 0,
        email: "",
        date: null,
        time: "",
        number: null,
      }

    const alert = {
        noAlert: "",
        name: "Provide first name and surname",
        phone: "Provide a valid phone number without spaces",
        email: "Email is not valid",
        // date: "Date must be selected",
        // time: "Time must be selected",
        // number: "Select the number of people. For groups more than 12, contact the restaurant by phone.",
        success: "Your reservation has been registered. You will receive an email of confirmation"
    }


    const [data, setData] = useState(initialState);
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [nameAlert, setNameAlert] = useState("")
    const [phoneAlert, setPhoneAlert] = useState("")
    const [emailAlert, setEmailAlert] = useState("")
    const [submitAlert, setSubmitAlert] = useState("")

    const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Reservation details", JSON.stringify(data))
    setData(initialState);
    setSubmitAlert(<Alert successMsg={alert.success}/>)
    setTimeout(() => {
       navigate("/") 
    }, 4000);
 
}

const handleInput = (event) => {
    let validationOk = true;
    setData({...data, [event.target.name]:event.target.value})

    //Name validation
    console.log(data);
  
        if  ((data.name.length + 1 < 4) || !(/\w+\s+\w+/.test(data.name))) {  //Regex checks if there is a space in the middle (between first name and surname)
            setNameAlert(<Alert alertMsg={alert.name}/>)
            validationOk = false;
        } else {
            setNameAlert("")
        }
    
 
    //Phone validation
    if((data.phone.length + 1 < 9) || !(/^\+?\d+$/.test(data.phone))) { //Regex checks if there are numbers and optional plus sign
        setPhoneAlert(<Alert alertMsg={alert.phone}/>)
        validationOk = false;
    }
    else {
        setPhoneAlert("")
    }

    //Email validation
    if ((data.email !== initialState.email) && !(/(\w+?@\w+?\x2E.+)/.test(data.email))) {
        setEmailAlert(<Alert alertMsg={alert.email}/>)
        validationOk = false;
    } 
    else {
        setEmailAlert("")
    }

    if (!data.date || !data.time || !data.number) {
        validationOk = false;
    }

    if (validationOk) setBtnDisabled(false);
}

    return (
        <>
            {submitAlert}
            <div className="container contact">
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-info">
                            <h1 className="fs-5">Make a reservation</h1>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <form className="contact-form">
                            <div className="col-sm-10">

                                <div className="form-group">
                                    <label className="control-label col-sm-2 d-inline" htmlFor="name">Name</label>
                                    <div className="col-sm-10">
                                        <i><BsFillPersonFill /></i>
                                        <input type="text" className="form-control" id="name" name="name" onChange={handleInput} />
                                        {nameAlert}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="phone">Telephone</label>
                                    <div className="col-sm-10">
                                        <i><BsFillTelephoneFill /></i>
                                        <input type="tel" className="form-control" id="phone" name="phone" onChange={handleInput} />
                                        {phoneAlert}
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="email">Email</label>
                                    <div className="col-sm-10">
                                    <i><BsFillEnvelopeFill /></i>
                                    <input type="email" className="form-control" id="email" name="email" onChange={handleInput} />
                                    {emailAlert}
                                </div>

                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="date">Date</label>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control" id="date" name="date" onChange={handleInput} />
                                </div>
                            </div>

                            <div className="form-group"><span className='fw-bold'>Time</span>
                                <div className='d-flex justify-content-around'>
                                    <div>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="radio1" name="time" value="13:00" onChange={handleInput} />13:00
                                            <label className="form-check-label" htmlFor="radio1" />
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="radio2" name="time" value="15:00" onChange={handleInput} />15:00
                                            <label className="form-check-label" htmlFor="radio2" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="radio3" name="time" value="20:00" onChange={handleInput} />20:00
                                            <label className="form-check-label" htmlFor="radio3" />
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="radio4" name="time" value="22:00" onChange={handleInput} />22:00
                                            <label className="form-check-label" htmlFor="radio4" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label className="control-label" htmlFor="number">Number of people</label>
                                <div className="col-sm-10">
                                    <i><BsFillPeopleFill /></i>
                                    <input type="number" className="form-control" id="number" name="number" min={1} max={12} onChange={handleInput} />
                                </div>
                            </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default" disabled={btnDisabled} onClick={handleSubmit}><BsFillSendFill />  Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div >
    
            </div>
        </>

    )
}

export default Reservations