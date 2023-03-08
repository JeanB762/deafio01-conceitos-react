import { ChangeEvent, useState } from 'react';
import styles from './Task.module.css';

import { Check, Trash } from 'phosphor-react';

export interface ITask {
  id: string;
  content: string;
  completed: boolean;
}

interface ITaskProps {
  task: ITask;
  toggleCompleted: (task: ITask) => void;
  onDeleteTask: (task: ITask) => void;
}

export function Task({ task, toggleCompleted, onDeleteTask }: ITaskProps) {
  function handleDelete() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskWrapper}>
        <div className={styles.checkWrapper}>
          <input
            type='checkbox'
            id={task.id}
            checked={task.completed}
            onChange={() => toggleCompleted(task)}
          />
          <label htmlFor={task.id}>
            {task.completed ? (
              <div className={styles.checked}>
                <Check />
              </div>
            ) : (
              <div className={styles.unchecked} />
            )}
          </label>
        </div>
        <span className={`${task.completed && styles.textChecked}`}>
          {task.content}
        </span>
      </div>
      <button title='Deletar Task' onClick={handleDelete}>
        <Trash className={styles.trash} />
      </button>
    </div>
  );
}
