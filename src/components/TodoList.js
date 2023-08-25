

import classes from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({data,deleteItem, toggleComplete}) => {

    return (

        <div className={ `${data.completed ? classes.wrapperc : classes.wrapper }`}>

            
            
             <div onClick={() => toggleComplete(data.id)} 
                className= {`${data.completed ? classes.linecross : ""}`} >
                 {data.data} 
             </div>

             <div className={classes.iconwrap}>
               
                 <div className={classes.icons} > <FontAwesomeIcon icon={faTrash} onClick={()=>deleteItem(data.id)}/></div>
             
            </div>



</div>

)
   
}


export default TodoList;