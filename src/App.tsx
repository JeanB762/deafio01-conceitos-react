import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main>
            <NewTask />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
