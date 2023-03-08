import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task, ITask } from './Task';
import clipBoard from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';
import { NewTask } from './NewTask';

export function TaskList() {
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed);
    setCompletedTasksCount(completedTasks.length);
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
          <div className={styles.createdTasks}>
            Tarefas criadas
            <div className={styles.counter}>{tasks.length}</div>
          </div>
          <div className={styles.completedTasks}>
            Concluídas
            <div
              className={styles.counter}
            >{`${completedTasksCount} de ${tasks.length}`}</div>
          </div>
        </div>
        {tasks.length > 0 ? (
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
