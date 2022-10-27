import '../../App.css';
import { useState } from 'react';
import left from '../../image/left.png';
import right from '../../image/right.png';
import { data } from '../../Data/dataSlide';



function Slide () {
const [person, setPerson] = useState(0);
const{id, image, description, title} = data[person];

const previousPerson = () => {
setPerson ((person => {
  person --;
  if (person < 0){
    return data.length-1;
  }
  return person;
}))
}

const nextPerson = () => {
  setPerson((person => {
    person++;
    if (person > data.length-1){
      person=0;
    }
    return person;
  }))
}

  return (
    <div className='slideContainer'>
      <div>
        <img className='slide' src={image} width="600" alt="photo"/>
      </div>
      <div className='slideInfo'>
        <h1>{title}</h1>
        <h3>{description}</h3>
        
      </div>
      <div className='previous'>
        <button className='slideBtn' onClick = {previousPerson}><img src={left}/></button>
        </div>
        <div className='next'>
        <button className='slideBtn' onClick = {nextPerson}><img src={right}/></button>
        </div>
        
      
    </div>
  );
}

export default Slide;