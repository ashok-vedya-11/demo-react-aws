
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense';
import ExpensesFilter from './components/ExpenseFilter';
import { useState } from 'react';

const dummy_expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
 
  const [expenses,setExpenses]=useState(dummy_expense);
  const[f,setF]=useState('')
  const filter=(d)=>{
    setF(d)
  }
  const addExpenseHandler=(expense)=>{
    setExpenses((prev)=>{
      return[expense,...prev];
    })
  }
 
  /*let filteredArray=expenses.filter((e)=>{
    
    return (e.date.getFullYear().toString()===f)
     
  })*/
 
  return ( 
   <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpensesFilter onChangeFilter={filter} selected={f}/>
      {expenses.map((expense,id)=><ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={id} />)}
     
    </div>
  );
}

export default App;
