import { Header } from './components/header'
import { InfoTask } from './components/infotask'
import { Task } from './components/task'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { PlusCircle } from 'phosphor-react'
import styles from './app.module.css'
import './global.css'

const task = [
  {
    id: 1,
    title: 'Fazer café',
    isCompleted: false //Uma informação para saber se a task está ou não concluida
  },
  {
    id: 2,
    title: 'Beber agua',
    isCompleted: true
  }
]

export function App() {
  const [tasks, setTask] = useState([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreatNewTask() {
    event.preventDefault()
    setTask([...tasks, newTaskText])

    setNewTaskText('')
  }

  function handleTextTask() {
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete) {
    const tasksWhithoutDeleteOne = tasks.filter(task => {
      return task != taskToDelete
    })

    setTask(tasksWhithoutDeleteOne)
  }

  function handeTaskInvalid() {
    event.target.setCustomValidity('Esse campo e obrigatório')
  }

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
                0 {tasks.length > 0 && 'de'} {tasks.length > 0 && countTasks}
              </span>
            </strong>
          </div>
        </main>
        <div>
          {tasks.map(task => {
            return <Task content={task} onDeleteTask={deleteTask} />
          })}
          {tasks.length === 0 && <InfoTask />}
        </div>
      </div>
    </div>
  )
}
