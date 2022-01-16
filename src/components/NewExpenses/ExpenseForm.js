import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm= (props)=> {
    const [userInput,setUserInput]=useState( {
        enteredTitle : '' ,
        enteredAmount : '',
        enteredDate : ''  
    })
    const titleChangeHandler = (event)=>{
        console.log(event.target.value);
        setUserInput ((prevState)=> {
            return (
                 {
                     ...prevState,
                     enteredTitle : event.target.value
                 }
             )
         })
    }
    const amountChangeHandler = (event)=>{
        console.log(event.target.value);
        setUserInput ((prevState)=> {
            return (
                 {
                     ...prevState,
                     enteredAmount : event.target.value
                 }
             )
         })
    }
    const dateChangeHandler = (event)=>{
        console.log(event.target.value);
        setUserInput ((prevState)=> {
            return (
                 {
                     ...prevState,
                     enteredDate : event.target.value
                 }
             )
         })
    }

    const formSubmitHandler=(event)=> {
         event.preventDefault();
         setUserInput({
             enteredTitle:'',
             enteredAmount : '',
             enteredDate : ''
         })
         const dataExpense= {
             title: userInput.enteredTitle ,
             amount :userInput.enteredAmount ,
             date : new Date(userInput.enteredDate)
         }
         props.onSaveExpenseData(dataExpense);
    }
  
    return (
      <form onSubmit={formSubmitHandler}>
          <div className='new-expense__controls'>
              <div className='new-expense__control'>
                  <label>Title</label>
                  <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle}></input>
              </div>
              <div className='new-expense__control'>
                  <label>Amount</label>
                  <input type='text' onChange={amountChangeHandler} value={userInput.enteredAmount}></input>
              </div>
              <div className='new-expense__control'>
                  <label>Date</label>
                  <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={userInput.enteredDate}></input>
              </div>
              <div className='new-expense__actions'>
                  <button type='submit'>Add Expense</button>
              </div>
              
          </div>
      </form>
  )
}

export default ExpenseForm;