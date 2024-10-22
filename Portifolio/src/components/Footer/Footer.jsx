import styles from './Footer.module.css';
import GitHub from '../../../src/Assets/github.svg';
import Instagram from '../../../src/Assets/instagram.svg';
import Linkedin from '../../../src/Assets/linkedin.svg';

export function Footer() {
    return (
        <section className={styles.section}>
            <div className={styles['social-media']}>
                <a href="https://github.com/jp-beltran" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="GitHub" />
                </a>
                <a href="https://www.instagram.com/jp_beltran._/" target="_blank" rel="noreferrer">
                    <img src={Instagram} alt="Insta" />
                </a>
                <a href="https://www.linkedin.com/in/joao-pedro-beltran" target="_blank">
                    <img src={Linkedin} alt="Linkedin" />
                </a>
            </div>

            <p>
                © 2024 - Portifólio - João Pedro Beltran. <br />
                Todos direitos reservados.
            </p>
        </section>
    );
}       