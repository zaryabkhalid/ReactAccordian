import React, { useState } from 'react'
import "./AccordianAPI";
import "./Accordian.css";
import { questions } from './AccordianAPI';
import MyAccordian from './MyAccordian'

const Accordian = () => {

    const [data, setData] = useState(questions);

    return (
        <>
            <div className="accor-wrapper">
                <h1 style={{ fontSize: '2rem', color: 'cadetBlue' }}>React Question Answer</h1>
                {
                    data.map((val) => {
                        const { id } = val
                        return <MyAccordian key={id} {...val} />
                    })
                }
            </div>
        </>
    )
}

export default Accordian
