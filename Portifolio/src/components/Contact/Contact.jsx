import styles from './Contact.module.css'; 

export function Contact() {
    return (
        <section id='contact' className={styles.section}>
            <h1>Contato</h1>
            <h4>jpbcs2005@gmail.com</h4>
            <a href="https://wa.link/24j200" target='_blank'>
                <button>Entrar em Contato</button>
            </a>
        </section>
    );
}


