import React from 'react';
import PropTypes from 'prop-types';


function Potato({ name, kor_name, rating }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{kor_name}</td>
      <td>{rating}/<i>5.0</i></td>
    </tr>
  );
}

//설치필요 : npm install prop-types
// 데이터 타입이 같아야 처리되도록 함
Potato.propTypes = {
    name : PropTypes.string.isRequired,
    kor_name : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
}

let fruits = [
  {
    id: 1,
    name: 'apple',
    kor_name: '사과',
    rating: 3
  },
  {
    id: 2,
    name: 'banana',
    kor_name: '바나나', 
    rating: 2
  },
  {
    id: 3,
    name: 'pineapple',
    kor_name: '파인애플',
    rating: 5
  },
];



function App() {
  return (
    <div className="App">
      <h1> Hello! </h1>
      <table>
        <tbody>
          {fruits.map((fruit, index) => {
            return (
              <Potato 
                name={fruit.name} 
                kor_name={fruit.kor_name} 
                rating={fruit.rating} 
                key={index} 
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
