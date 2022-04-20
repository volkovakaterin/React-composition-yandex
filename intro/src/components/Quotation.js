import React from 'react';
// Отвечает за отображение котировок

function Quotation(props) {
    let quotation = props.quotation.map((item) =>
        <ul className='quotations'>
            <li className='subject'>{item.title}</li>
        </ul>)         
    return (
        <>
            {quotation}
        </>
    );
}

export default Quotation;