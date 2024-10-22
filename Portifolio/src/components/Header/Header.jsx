import { useState } from 'react';
import styles from './Header.module.css';
import profileImgHeader from '../../Assets/profile-img-header.png';

export function Header() {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <header className={styles.header}>
            <img src={profileImgHeader} alt='profile-img' />
            <nav>
                <a
                    href="#about"
                    className={activeButton === 'about' ? styles.active : ''}
                    onClick={() => handleButtonClick('about')}
                >
                    Sobre
                </a>
                <a
                    href="#projects"
                    className={activeButton === 'projects' ? styles.active : ''}
                    onClick={() => handleButtonClick('projects')}
                >
                    Projetos
                </a>
                <a
                    href="#contact"
                    className={activeButton === 'contact' ? styles.active : ''}
                    onClick={() => handleButtonClick('contact')}
                >
                    Contato
                </a>
            </nav>
        </header>
    );
}