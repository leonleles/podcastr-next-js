import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {
  const currentData = format(new Date(), 'EEEEEE, d MMM', {
    locale: ptBR
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <img src="/logo.svg" alt="PodCastr" />
      </Link>

      <p>O melhor para você, sempre</p>

      <span>{currentData}</span>
    </header>
  );
}