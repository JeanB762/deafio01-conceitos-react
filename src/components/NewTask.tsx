import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  InvalidEvent,
  SetStateAction,
  useState,
} from 'react';
import styles from './NewTask.module.css';
import { ITask } from './Task';

interface NewTaskProps {
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export function NewTask({ setTasks }: NewTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const taskToAdd: ITask = {
      id: uuidv4(),
      content: newTask,
      completed: false,
    };
    setTasks((tasks) => [...tasks, taskToAdd]);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <form onSubmit={handleCreateNewTask} className={styles.newTask}>
      <input
        type='text'
        name='newTask'
        placeholder='Adicione uma nova tarefa'
        onChange={handleNewTaskChange}
        value={newTask}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type='submit' disabled={isNewTaskEmpty}>
        Criar <PlusCircle />
      </button>
    </form>
  );
}
