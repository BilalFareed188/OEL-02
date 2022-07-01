import React, { useState } from "react";


function CountactUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);
    const [showErrors, setShowErrors] = useState(false);




    let errors = [];
    
    const formValidation = () => {
        setErrorMessages([]);
        const isNameValid = (name !== "");
        const isMessageValid = ( message !== "");
        const isSubjectValid = (subject !== "");
        if (!isNameValid) {
        errors.push("Name is not valid, please try again.");
        }
        if (email === "") {
        errors.push("Email field is empty, please try again.")
        }
        if (!isMessageValid) {
        errors.push("Message is not valid, please try again.");
        }
        if (!isSubjectValid) {
        errors.push("Subject is not valid, please try again.");
        }
        if (errors.length > 0) {
        setShowErrors({ showErrors: true });
        setErrorMessages(errors);
        } 
        else {
        setShowErrors({ showErrors: false });
        alert("Data Stored!");
        }
    };



    return(
        <center>
            <div> 
                <form action="/sign_up" method="post"> 
                    <input placeholder="Name" type ="text" name="name" id="name" onChange = {e => setName({name: e.target.value})}/><br/><br/>
                    <input placeholder="Email"  type ="email" name="email" id="email" onChange ={e => setEmail({email: e.target.value})}/><br/><br/>
                    <input placeholder="Subject" type ="text"  name="subject" id="subject" onChange = {e => setSubject({subject: e.target.value})}/><br/><br/>
                    <input placeholder="Message" type ="text" name="message" id="message" onChange  ={e => setMessage({message: e.target.value})}/><br/><br/>
                    <input placeholder="contained" color="primary" type="button" value="Submit" onClick = {formValidation}/>  <br/><br/>

                    {showErrors ? errorMessages.map((item, index) => {return <ul key={index}>{item}</ul>;}) : null}
                </form>
            </div>
        </center>
    
    )
}

export default CountactUs;