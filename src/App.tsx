import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main>
            <TaskList />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
