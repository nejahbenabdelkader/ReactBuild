import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props)=> {
    const saveExpenseDataHandler= (dataEntered)=> {
        dataEntered.id=Math.random();
    
        props.saveDataExpense(dataEntered)
    }
    return (
      <div className='new-expense'>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
      </div>
  )
}

export default NewExpense;