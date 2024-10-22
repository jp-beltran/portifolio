import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.section}>
            <div className="about-wrapper">
                <h1>Olá, meu nome é <span>João Pedro</span>,<br />
                 Sou um desenvolvedor web full stack.
                </h1>

                <a href="#about">
                    <button>INICIAR JÁ</button>
                </a>
            </div>
            <div className={styles['img-wrapper']}>
                 <img src='https://i.imgur.com/eC5VBzV_d.webp?maxwidth=760&fidelity=grand' alt="profile-img" />
            </div>
        </section>

    );
}