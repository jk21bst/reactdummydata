import React from 'react';
import list from '../data';
import './styles/amazon.css';
import Cards from './Cards';

const amazon = ({ handleClick }) => {
  return (
      <section>{
          list.map((item)=>(
              <Cards item={item}  key={item.id} handleClick={handleClick} />
              
          ))
      }
              
       
       
   </section>
  )
}

export default amazon
