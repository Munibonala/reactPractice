import React , {useState} from 'react';
import './Expence.css'
import ExpenseDate from './ExpensesDate'
function Expences(props){
    const [title, setTitle] = useState(props.title)
   const clickHandler = ()=>{
        setTitle('You Updated');
   }
    return(
        <div className="expense-item">
         <ExpenseDate date={props.date} />
            <div className="expense-item__description ">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}
export default Expences