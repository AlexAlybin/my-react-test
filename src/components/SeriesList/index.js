import React from 'react';
import './index.css';

const SeriesList = props => (
    <div>
        <ul className='series-list'>
            {props.list.map(function(show) {
                return <li key={show.year}>{show.name}
                {show.year}
                </li>
            })}
        </ul>
    </div>
)

export default SeriesList;