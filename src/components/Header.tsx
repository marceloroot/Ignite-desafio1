

interface PropsHeader{
    title:string;
}

import styles from './Header.module.css';
import Logo from '../assets/Logo.svg';
export function Header({title}:PropsHeader){
    return(
        <header className={styles.header}>
            <img src={Logo} />
        </header>
    );
}