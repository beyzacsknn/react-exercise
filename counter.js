import React from 'react';
import {useState} from 'react';


export function App(props) {

  const [number, setNumber] = useState(0);
  const [name, setName ] =useState('Unknown')


  return (
    <div className='App'>
     <h1>{`${number}. Kullanici: ${name}`}</h1>
     <h2>{number}</h2>
     <button onClick ={ () => {setNumber(number+1); setName('Beyza')}}>Increase</button>
     <button onClick ={ () => setNumber(number-1)}>Decrease</button>


    </div>
  );
}

// Log to console
console.log('Hello console')
