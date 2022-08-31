
import './App.css';
import TodoItem from './components/TodoItem.js';

let todoItems = [
  { id: 1, description: 'Hit the gym', img: './images/haekchen.png', todostatus: 'done' },
  { id: 2, description: 'Pay bills', img: './images/haekchen.png', todostatus: 'done' },
  { id: 3, description: 'Meet George', img: './images/imbau.png', todostatus: 'is still open' },
  { id: 1, description: 'Buy eggs', img: './images/imbau.png', todostatus: 'is still open' },
  { id: 2, description: 'Read a book', img: './images/x.png', todostatus: 'is in progress' },
  { id: 3, description: 'Organize office', img: './images/x.png', todostatus: 'is in progress' }
];



function App() {
  return (
    <>
      <div className='clsDiv'>
        <h1> <span className="clsHeaderRed">T</span>odo  List</h1>
        <ul className="clsUl">
          {
            todoItems.map(
              (element) =>
                <TodoItem
                  id={element.id}
                  description={element.description}
                  img={element.img}
                  todostatus={element.todostatus}
                />
            )
          }
        </ul></div>
    </>
  );
}

export default App;
