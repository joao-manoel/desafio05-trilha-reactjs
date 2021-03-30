import styles from './styles.module.scss';

export default function Loading(): JSX.Element {
  return (
    <div className={styles.container}>
      <p>Carregando</p>
    </div>
  );
}
