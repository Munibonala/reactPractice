import React from 'react';
import './Expences'
import Expences from './Expences';
import './ExpensesAll.css'
function ExpensesAll(props){
   
    return (
        <div className="expenses">
            {props.items.map(item=>(
                    <Expences key={item.id} title={item.title} amount={item.amount} date={item.date} />
            ))}
     {/* <Expences title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
     <Expences title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
     <Expences title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
        </div>
    )
}
export default ExpensesAll