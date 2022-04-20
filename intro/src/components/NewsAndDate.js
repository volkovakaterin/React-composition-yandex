import React from 'react';
// Отвечает за отображение новостей согласно выбранной категории и дату

function NewsAndDate(props) {
    let newsChapter = props.news.map((item) =>
        <ul className='news-chapter'>
            <li className='chapter'>{item.title}</li>
        </ul>)
    let date = <div className='date'>{props.date}</div>   
    let listNews = props.news[0].list.map((news) =>
        <ul className='news-list'>
            <li className='news'>
                <div className='icon-news'>{news.icon}</div>
                <div className='description'>{news.description}</div>
            </li> 
        </ul>)
         
    return (
        <>
            {newsChapter}
            {date}
            {listNews}
        </>
    );
}

export default NewsAndDate;