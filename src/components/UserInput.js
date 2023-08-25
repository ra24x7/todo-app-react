import classes from './UserInput.module.css'
import {useState} from 'react'
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';




const UserInput = () => {

    const [newTask,setNewTask] = useState("");
    const [listData,setListData] = useState([]);


    const addInputHandler = (event) => {  
         setNewTask(event.target.value)
    }

    const addListData = () => {
        const newListData = {id:uuidv4(),data:newTask, completed: false}
         setListData([...listData, newListData])
         console.log(listData);
    }

    const formSubmitHandler = (event) => {

        event.preventDefault();
        setNewTask('')
    }

    const deleteItemHandler = id => {

        setListData(listData.filter(item => item.id !== id))
    }

    const toggleComplete = (id) => {

        setListData(listData.map( (item)=> item.id === id ?
        {...item, completed: !item.completed } : item  ))
   
    }

    const inputForm =   (
    
        <form className={classes.todo}
            onSubmit={formSubmitHandler}
            >
                <input 
                type='text' 
                className={classes.input} 
                placeholder='Enter your task here'
                onChange={addInputHandler}
                value={newTask}
                >
                </input>

                <button 
                type='submit' 
                className={classes.button}
                onClick={addListData}
            >
                Add
                </button>

        </form>)

    return (
        <>
        {inputForm}
        {listData.map((todo,index) => (
        <TodoList data={todo} key={todo.id} deleteItem={deleteItemHandler} toggleComplete={toggleComplete}/>))}
    
        </>
    );
};

export default UserInput;