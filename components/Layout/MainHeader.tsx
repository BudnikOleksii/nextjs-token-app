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
            <Link href="/token/usd">Token statistic in Dollars</Link>
          </li>
          <li className={classes.navigationLink}>
            <Link href="/token/gbp">Token statistic in Pounds</Link>
          </li>
          <li className={classes.navigationLink}>
            <Link href="/token/eur">Token statistic in Euro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
