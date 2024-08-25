import { useState } from 'react'
import './App.css'

function App() {
  const [listItem, setListItem] = useState("")
  const [list,setList] = useState([])

  const addItem = ()=> {
    if (listItem.trim())
    setList([...list,listItem])
    setListItem("")
  }

  const removeItem = (index)=> {
    setList(list.filter((_,i) => i!==index))
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') 
      addItem()
  }

  return (
    <>
      <h1>Todo List</h1>

      <div className="inputbox">
        <input type="text" value={listItem} onChange={(e) => setListItem(e.target.value)} onKeyDown={handleKeyDown}/>
        <button onClick={addItem} >Add</button>
      </div>

      <div className="list">
        {list.map((list,index) => (
          <div key={index}>
            {list}
            <button onClick={() => removeItem(index)}>x</button>
            </div>
        ))}
      </div>
    </>
  )
}

export default App
