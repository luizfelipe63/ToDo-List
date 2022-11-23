import styles from './infotask.module.css'
import Clipboard from '../assets/Clipboard.svg'

export function InfoTask() {
  return (
    <aside className={styles.infos}>
      <img src={Clipboard} />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p> Crie tarefas e organize seus itens a fazer</p>
    </aside>
  )
}
