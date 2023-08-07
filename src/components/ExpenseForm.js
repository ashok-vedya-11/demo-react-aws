import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{

    const[userInput,setUserInput]=useState({
        title:'',
        date:'',
        amount:''
    })
    const titleChangeHandler=(event)=>{
       /* setUserInput({
            ...userInput,title:event.target.value
        })*/
        setUserInput((prevState)=>{
            return {...prevState,title:event.target.value};
        })
    }
    const dateChangehandler=(event)=>{
        setUserInput({
            ...userInput,date:event.target.value
        })
    }
    const amountChangeHandler=(event)=>{
        setUserInput({
            ...userInput,amount:event.target.value
        })
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        props.onSubmitData(userInput);
        setUserInput({title:'',
        date:'',
        amount:''})
    }
    return <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' value={userInput.title}onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' value={userInput.date} min="2019-01-01" max="2022-12-31" onChange={dateChangehandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>amount</label>
                        <input type='number' value={userInput.amount} onChange={amountChangeHandler}/>
                    </div>

                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expension</button>
                </div>
        </form>
}

export default ExpenseForm;