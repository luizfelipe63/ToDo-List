import styles from './task.module.css'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function Task({ content, onDeleteTask, isCompleted }) {
  const [checked, setChecked] = useState(false)

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <Checkbox.Root
          checked={checked}
          onCheckedChange={setChecked}
          className={styles.CheckboxRoot}
        >
          <Checkbox.Indicator className={styles.CheckboxIndicator}>
            {checked === true && <CheckIcon color="white" />}
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          className={
            checked == true ? styles.taskChecked : styles.taskNoChecked
          }
        >
          {content}
        </label>
      </div>

      <button onClick={handleDeleteTask} className={styles.buttonTrash}>
        <Trash size={24} />
      </button>
    </div>
  )
}