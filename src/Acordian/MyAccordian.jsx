import React, { useState } from 'react'

const MyAccordian = ({ question, answer }) => {

    const [show, setShow] = useState(false);
    return (
        <>


            <div className="questions">
                <p className="show" onClick={() => setShow(!show)}>{show ? '-' : '+'}</p>
                <h1>{question}</h1>
            </div>
            {
                show && <p>{answer}</p>
            }


        </>
    )
}

export default MyAccordian
