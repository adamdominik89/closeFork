import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './List';
import reportWebVitals from './reportWebVitals';


const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
    (items, size) => [
        ...items,
        ...fruits.reduce(
            (acc, fruit) => [
                ...acc,
                ...colors.reduce(
                    (acc, color) => [
                        ...acc,
                        {
                            name: `${size} ${color} ${fruit}`,
                            color,
                        },
                    ],
                    [],
                ),
            ],
            [],
        ),
    ],
    [],
);


ReactDOM.render(
  <React.StrictMode>
    <List items={items} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
