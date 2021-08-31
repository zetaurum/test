import type { NextPage } from 'next';
import styles from 'styles/index.module.css';

const HomePage: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <div>
          <p>Soon it will be populated with ToDo app content</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Just a footer</p>
      </footer>
    </>
  );
};

export default HomePage;
