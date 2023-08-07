import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{

    const onSaveDataHandler=(expenseData)=>{
        const newExpenseData={...expenseData}
        console.log("===---");
        console.log(newExpenseData);
        props.onAddExpense(newExpenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSubmitData={onSaveDataHandler}/>
            </div>
}

export default NewExpense;