import styles from './logo.module.scss';
export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src='/assets/images/logo.svg' alt='' />
      <h1>Shellops</h1>
    </div>
  );
}
