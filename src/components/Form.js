import React from 'react';
import '../App.css';

const Form=(props)=>
    (
    <form onSubmit={props.fetchData1} style={{marginBottom:"2rem"}}>
        <input className="form__input" type="text" name="planetName" />
        <button className="form__button" >Search</button>
    </form>
    )

export default Form;