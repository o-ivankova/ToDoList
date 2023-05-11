import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList'
import ItemStatusFilter from '../ItemStatusFilter';
import './App.css';

const App = () => {
    const elements = [
        { id: 1, content: "Drink Coffee", important: false },
        { id: 2,content: "Learn React", important: true },
        { id: 3,content: "Have dinner", important: false },
        { id: 4,content: "Read a book", important: false },
    ];
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ItemStatusFilter/>
            <ToDoList elements = { elements } />
        </div>
    )
}
export default App;