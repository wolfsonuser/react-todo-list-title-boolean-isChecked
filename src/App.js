//  Nelson Lopez
// react-todo-list 01/15/2022
//import './App.css';
import React from 'react';
import { Container, Row, Col, InputGroup, Button, Form, Jumbotron } from 'react-bootstrap'

// Set URL
let url = '/api/todos' // ERROR!! if http://localhost:
function App() {
  return (
    <Container>
      <Row>
        <Col md={{ offset: 3, span: 6 }}>
          <TodoListCard />
        </Col>
      </Row>
    </Container>
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
      <AddItemForm  />
      {items.length === 0 && (
        <p className="text-center">You have no items yet!!</p>
      )}
      {items.map(item => (
        <ItemDisplay
          item={item}
          key={item._id} // ERROR!! if commented out
        />
      ))}
    </React.Fragment>
  )
}
function AddItemForm() {
  const [newItem, setNewItem] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);

  const submitNewItem = e => {

  }
  return (
    <Form onSubmit={submitNewItem}>
      <InputGroup className='mb-3'>
          {/* ERROR!!! Below line gives an error, WHY??? */}
        {/* <Form.control value={newItem} type="text" placeholder="New Item" /> */}
        <Form.Control size="lg" type="text" placeholder="New Item" />
        <Button>
          Button
        </Button>
      </InputGroup>
    </Form>
  )
}

function ItemDisplay({ item }) {
  console.log(`48 - ${item.title} ${item._id}`);
  return (
    <Container fluid className={`item ${item.completed && 'completed'}`}>
      <Row>
        <Col xs={1} className='text-center'>
          <Button size='sm' variant='link'>V</Button></Col>
        <Col xs={10} className='name'>{item.title} </Col>
        <Col xs={1} className='text-center remove'>
          <Button size='sm' variant='link'>X</Button></Col>
      </Row>
    </Container>

  )
}

export default App;
