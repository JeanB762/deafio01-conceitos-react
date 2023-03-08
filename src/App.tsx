import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import styles from './App.module.css';
import './global.css';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main>
            <NewTask />
            <TaskList />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
