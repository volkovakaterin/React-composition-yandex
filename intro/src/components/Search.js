import React from 'react';
// Отвечает за отображение строки поиска
function Search (props) {
    console.log(props.searchСategories[0].title);
    let searchСategories = props.searchСategories.map((item) =>
      <li>{item.title}</li>
    )
    return (
    <ul className='search-categories'>
      {searchСategories}
    </ul>
    );
}

export default Search;