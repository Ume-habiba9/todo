import React, { useState } from 'react'
import './App.css';
import Task from './Task';
import './newtask';
function App() {


  const [mytask, setmytask] = useState('');
  const [mynewtask, setmynewtask] = useState([]);

  function settask(e) {
    setmytask(e.target.value);

  }
  function submit() {
    const item =
    {
      "id": mynewtask.length + 1,
      "task": mytask,
      "complete": false,
      "notified" : false
    };
    const newTodos = mynewtask.slice();
    newTodos.push(item);
    setmynewtask(newTodos);
    setmytask('');

  }


  function remove(del) {
    const filtered = mynewtask.filter(item => {
      if (item.id !== del )
        return item;
    })
    setmynewtask( filtered)
  }

  function checked(id, com) {
    let check = mynewtask.map(items => {
      return items.id === id ? { ...items, complete: !items.complete } : { ...items }
    });
    setmynewtask(check);
  }


function notify(id, n) {
  let change = mynewtask.map(items =>{
    return items.id === id ? {...items , notified :!items.notified} : {...items}
  });
  setmynewtask(change);
}


  return (
    <div className="App">
      <h1>ToDo List</h1>
      <header className="App-header">
        <div className='add'>
          <input type='text' id='newtask' className='newtasks' placeholder='Add New Task' value={mytask} onChange={(e) => settask(e)} />
          <button type='submit' id='btn' onClick={() => submit()} >Submit</button>
        </div>
        <div id='addedtask' className='tasks' >
          {
            mynewtask.length != 0 && mynewtask.map((item, index) => {
              return (
                <Task items={item} key={index} index={index} remove={remove} checked={checked} notify={notify} />
              )
            })
          }
        </div>
      </header>

    </div>

  );

}
export default App;




