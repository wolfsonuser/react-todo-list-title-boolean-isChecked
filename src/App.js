//  Nelson Lopez
// react-todo-list 01/15/2022
//import './App.css';
import React from 'react';
import {  Row, Col, InputGroup, Button, Form, Jumbotron } from 'bootstrap'

// Set URL
let url = '/api/todos'
function App() {
  return (
    <div className="App">
      <TodoListCard />
      <h1>Hello World!!!</h1>
    </div>
  );
}
function TodoListCard() {
  const [items, setItems] = React.useState(null);
  console.log(`18 - `)
  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setItems);
  }, []);

  if (items === null) return 'Loading.....';

  return (
    <React.Fragment>
      {/* <AddItemForm onNewItem={onNewItem} /> */}
      {/* <AddItemForm  /> */}
      {items.length === 0 && (
        <p className="text-center">You have no items yet!!</p>
      )}
      { items.map( item => (
        <ItemDisplay
           item = {item }
           key = {item._id } // ERROR!!
        />
      ))}
    </React.Fragment>
  )
}
function AddItemForm ( { onNewItem }) {
  const [newItem, setNewItem] = React.useState('');
}

function ItemDisplay ( { item }) {
  console.log(`48 - ${item.title} ${item._id}`);
  return (
   <>
      {item.title} {item._id } {'\n'}
   </>
    
  )
}

export default App;
