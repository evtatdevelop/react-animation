import './App.css';
import { useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import { List } from './List';

function App() {
  const [toggle, setToggle] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [items, setItems] = useState([
    {id: 1, title: 'Item 1'},
    {id: 2, title: 'Item 2'},
    {id: 3, title: 'Item 3'},
  ])

  const addItem = () => {
    const id = Date.now()
    const title = prompt('Iitem title')
    setItems(items.concat([{
      id, 
      title
    }]))
  }

  const removeItem = itemId => setItems(items.filter(item => item.id !== itemId))

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setToggle2(!toggle2)}>Toggle2</button>
      <button onClick={addItem}>Add item</button>
      <hr/>
      <div className='blocks'>
        {/* {toggle && <div className='square blue'></div>} */}
        <Transition
          in={toggle}
          timeout={{
            enter: 750,
            exit: 500,
          }}
          mountOnEnter
          unmountOnExit

          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {state => <div className={`square blue ${state}`}>{state}</div>}
        </Transition>
        
        <CSSTransition
          in={toggle2}
          timeout={300}
          classNames={'os'}
          mountOnEnter
          unmountOnExit
        >
          <div className='square orange'>{toggle2.toString()}</div>
        </CSSTransition>
      </div>

      <div className='blocks'>
        <List items={items} onRemove={removeItem}/>
      </div>
    </div>
  );
}

export default App;
