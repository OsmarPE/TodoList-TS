import { useState } from 'react'
import './App.scss'
import Header from './includes/Header'
import Task from './components/Task'
import {TaskType} from './types'
import Form from './components/Form'
import TaskIcon from './assets/icons/TaskIcon'
function App() {

    

  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, task: 'Go to school at 3:00', check: false },
    { id: 2, task: 'Send progress report to the manager', check: true },
    { id: 3, task: 'Prepare presentation for the meeting', check: false }
  ])

  const [value, setvalue] = useState<string>('')


  function HandleSubmit(e:React.FormEvent<HTMLFormElement>):void {
    e.preventDefault()
    
    if (!value) return 
    
    setTasks([...tasks,{
      id: Date.now(),
      task: value,
      check: false
    }])


    setvalue('')
    
  }


  function removeTask(id: number):void {
    const taskFilter:TaskType[] = tasks.filter( task => task.id !== id)
    setTasks(taskFilter)
  }

  function setIsChecked(id: number):void {
    const newTasks:TaskType[] = tasks.map( task => task.id !== id ? task : {
      id: task.id,
      check: !task.check,
      task: task.task
    })

    setTasks(newTasks)
    
  }

  return (
    <>
      <Header />

      <main className='card'>
        <Form HandleSubmit={HandleSubmit} setvalue={setvalue} value={value}/>

        <header className="card__heading">
            <TaskIcon/>
            <h2 className='card__title'>Tasks</h2>
        </header>

        <div className='card__body'>
          {
            tasks.map(item => <Task key={item.id} taskItem={item} removeTask={removeTask} setIsChecked={setIsChecked} /> )
          }
        </div>
      </main>
    </>
  )
}

export default App
