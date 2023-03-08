import { useEffect, useState } from 'react';
import clipBoard from '../assets/Clipboard.svg';
import { Task } from './Task';
import styles from './TaskList.module.css';

export function TaskList() {
  const [hasTasks, setHasTasks] = useState(false);
  const [tasks, setTasks] = useState([1, 2, 3, 4]);

  useEffect(() => {
    tasks.length > 0 ? setHasTasks(true) : setHasTasks(false);
  }, [tasks]);

  return (
    <div className={styles.tasks}>
      <div className={styles.tasksInfo}>
        <span className={styles.createdTasks}>Tarefas criadas</span>
        <span className={styles.completedTasks}>Concluídas</span>
      </div>
      {hasTasks ? (
        <div className={styles.tasksList}>
          {tasks.map((task) => {
            return <Task key={task} />;
          })}
        </div>
      ) : (
        <div className={styles.tasksListEmpty}>
          <img src={clipBoard} alt='' />
          <div>
            <p className={styles.tasksInfo_bold}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </div>
  );
}
