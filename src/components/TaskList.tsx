import { useEffect, useState } from 'react';
import { Task, ITask } from './Task';
import { NewTask } from './NewTask';
import clipBoard from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';

export function TaskList() {
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const tasksLocalStorage = localStorage.getItem('@desafio01:tasks');
    if (tasksLocalStorage) {
      return JSON.parse(tasksLocalStorage);
    }
    return [];
  });

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed);
    setCompletedTasksCount(completedTasks.length);
    localStorage.setItem('@desafio01:tasks', JSON.stringify(tasks));
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
      <NewTask tasks={tasks} setTasks={setTasks} />

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
