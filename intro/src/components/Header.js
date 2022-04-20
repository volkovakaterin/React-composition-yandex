import React from 'react';
import NewsAndDate from './NewsAndDate';
import Quotation from './Quotation';
// Отвечает за отображение трёх компонентов в шапке сайта
function Header() {
    const newsAndDate = {
        news: [
      {title: "В Германии", list: [{icon: '', description: ''}, {icon: '', description: ''}, {icon: '', description: ''}]},
      {title: "В Германии", list: [{icon: '', description: ''}, {icon: '', description: ''}, {icon: '', description: ''}]},
      {title: "В Германии", list: [{icon: '', description: ''}, {icon: '', description: ''}, {icon: '', description: ''}]},
    ], 
        date: '13.04.2022'
    }

    const quotation = [
        {title: 'usd'},
        {title: 'eur'},
        {title: 'oil'}]
        
    
    
    return (
        <div>
         <NewsAndDate {...newsAndDate}/>
         <Quotation quotation={quotation}/> 
           {/*компонент отвечающий за виджет с каким-то интерактивом  */}
        </div>
      
    );
  }
  
  export default Header;