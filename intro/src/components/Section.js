import React from 'react';
// Отвечает за отображение виджетов на различные темы
function Section (props) {
    console.log(props.children);
    return (
        <>
        <h3>{props.title}</h3>
        <ul className={props.className}>{props.children(props.items)}
        </ul>
        </>
        
    );
}

export default Section;