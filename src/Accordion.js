import React, {useState} from 'react'
import { questions } from "./api";
import MyAccordion from './MyAccordion';
import './Accordion.css';

const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <section className="main-div">
                <h1>React Interview Questions </h1>
        {
                data.map((curElem) => {
                    return <MyAccordion key={curElem.id} {...curElem} />
                    //here the spread operator is use to pass the the properties of the questions api
                })        
        }
                 </section>
        </>
    )
}

export default Accordian