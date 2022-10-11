import Link from 'next/link';
import classes from './MainHeader.module.css';

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Home page</Link>
      </div>

      <nav className={classes.navigation}>
        <ul className={classes.navigationList}>
          <li className={classes.navigationLink}>
            <Link href="/usd">Token info in Dollars</Link>
          </li>
          <li className={classes.navigationLink}>
            <Link href="/gbp">Token info in Pounds</Link>
          </li>
          <li className={classes.navigationLink}>
            <Link href="/eur">Token info in Euro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
