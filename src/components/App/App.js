import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList'
import ItemStatusFilter from '../ItemStatusFilter';
import './App.scss';

const App = () => {
    const initialElements = [
        { id: 1, content: "Drink Coffee", important: false },
        { id: 2, content: "Learn React", important: true },
        { id: 3, content: "Have dinner", important: false },
        { id: 4, content: "Read a book", important: false },
    ];

    const [elements, setElements] = React.useState(initialElements);

    const deleteItem = (id) => {
        setElements(( elements ) =>
      {
       const index = elements.findIndex(el => el.id === id);
       const newElements = [...elements.slice(0, index), ...elements.slice(index + 1)]
         return newElements;
      })
    };

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ItemStatusFilter/>
            <ToDoList
               elements = { elements }
               onDeleted = { deleteItem }
            />
        </div>
    )
}
export default App;