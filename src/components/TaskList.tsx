import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task, ITask } from './Task';
import clipBoard from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';
import { NewTask } from './NewTask';

export function TaskList() {
  const [hasTasks, setHasTasks] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    tasks.length > 0 ? setHasTasks(true) : setHasTasks(false);
  }, [tasks]);

  function handleToggleCompletedTask(taskToToggle: ITask) {
    setTasks((state) =>
      state.map((task) =>
        task.id === taskToToggle.id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(taskToDelete: ITask) {
    const newCommentsWithoutDeletedOne = tasks.filter(
      (task) => task.id !== taskToDelete.id
    );
    setTasks(newCommentsWithoutDeletedOne);
  }

  return (
    <>
      <NewTask setTasks={setTasks} />

      <div className={styles.tasks}>
        <div className={styles.tasksInfo}>
          <span className={styles.createdTasks}>Tarefas criadas</span>
          <span className={styles.completedTasks}>Concluídas</span>
        </div>
        {hasTasks ? (
          <div className={styles.tasksList}>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  toggleCompleted={handleToggleCompletedTask}
                  onDeleteTask={deleteTask}
                />
              );
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
    </>
  );
}
