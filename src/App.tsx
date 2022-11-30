import { Header } from './components/header'
import { InfoTask } from './components/infotask'
import { Task } from './components/task'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


import { PlusCircle } from 'phosphor-react'
import styles from './app.module.css'
import './global.css'


interface taskesProps{
  id:string,
  content:string,
  state:boolean
}


export function App() {
  const [tasks, setTask] = useState(Array<taskesProps>)
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreatNewTask(event:FormEvent) {
    event.preventDefault()

    setTask([
      ...tasks,
      {
        id: uuidv4(),
        content: newTaskText,
        state: false
      }
    ])

    setNewTaskText('')
  }

  function handleTextTask(event:ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete:string) {
    const tasksWhithoutDeleteOne = tasks.filter(task => {
      return task.id != taskToDelete
    })

    setTask(tasksWhithoutDeleteOne)
  }

  function handeTaskInvalid(event:InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo e obrigatório')
  }

  function changeTaskStatus(state:string) {
    const todoListWithChangedTask = tasks.map(task => {
      if (task.id === state) {
        task.state = !task.state
        return task
      }
      return task
    })

    setTask(todoListWithChangedTask)
  }

  const numberOfCompleted = tasks.filter(
    task => task.state === true
  ).length

  const countTasks = tasks.length

  const isDisabledTask = newTaskText.length == 0

  return (
    <div>
      <Header />

      <div className={styles.wapper}>
        <div>
          <form onSubmit={handleCreatNewTask} className={styles.container}>
            <input
              onChange={handleTextTask}
              placeholder="Adicionar uma nova tarefa"
              type="text"
              value={newTaskText}
              required
              onInvalid={handeTaskInvalid}
            />
            <button type={'submit'} disabled={isDisabledTask}>
              Criar
              <PlusCircle size={16} weight="bold" />
            </button>
          </form>
        </div>

        <main className={styles.content}>
          <div className={styles.counter}>
            <strong className={styles.blue}>
              Tarefas criadas<span>{countTasks}</span>
            </strong>
            <strong className={styles.purple}>
              Concluidas
              <span>
                {numberOfCompleted} {tasks.length > 0 && 'de'}{' '}
                {tasks.length > 0 && countTasks}
              </span>
            </strong>
          </div>
        </main>
        <div>
          {tasks.map(task => {
            return (
              <Task
                key={task.id}
                content={task.content}
                id={task.id}
                isChecked={task.state}
                onDeleteTask={deleteTask}
                isCompleted={changeTaskStatus}
              />
            )
          })}
          {tasks.length === 0 && <InfoTask />}
        </div>
      </div>
    </div>
  )
}
