import styles from './task.module.css'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Trash } from 'phosphor-react'


interface taskProps {
  id:string,
  content:string,
  isChecked: boolean,
  isCompleted: (task:string) => void,
  onDeleteTask: (state:string) => void 
}

export function Task({ id, isCompleted, content, onDeleteTask, isChecked }:taskProps) {


  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleCheckedTask() {
    isCompleted(id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <Checkbox.Root
          onCheckedChange={handleCheckedTask}
          className={styles.CheckboxRoot}
        >
          <Checkbox.Indicator className={styles.CheckboxIndicator}>
            <CheckIcon/>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={isChecked == true ? styles.taskChecked : styles.taskNoChecked}>
          
          {content}
        </label>
      </div>

      <button onClick={handleDeleteTask} className={styles.buttonTrash}>
        <Trash size={24} />
      </button>
    </div>
  )
}
