import styles from './About.module.css'; 

export function About() {
    return (
        <section className={styles.section}>
            <div className={styles['container']}>
                <h2>Sobre Mim</h2>

                <div id='about' className={styles['about-wrapper']}>
                    <div className={styles['about-wrapper-info-img']}>
                        <img src="https://i.imgur.com/nKMPybi_d.webp?maxwidth=760&fidelity=grand" alt="Imagem de perfil" />
                    </div>

                    <div className={styles['about-wrapper-info-text']}>
                        <p>
                             Estudante de Análise e Desenvolvimento de Sistemas no UniCEUB, com grande interesse em desenvolvimento de software e tecnologia. Possuo experiência prática em diversas linguagens de programação como HTML, CSS, JavaScript, Java, Python e SQL, além de habilidades com frameworks e ferramentas modernas como React e Vite. Essas tecnologias foram aplicadas em projetos acadêmicos e pessoais, permitindo que eu me aprofundasse no desenvolvimento front-end e na criação de aplicações eficientes e interativas. Meu compromisso com o aprendizado contínuo e o aprimoramento técnico reflete a  busca por excelência na área de tecnologia da informação.
                        </p>

                        <p>
                            Também atuo como monitor de informática para jovens aprendizes no UniCEUB, onde ensino conceitos básicos de tecnologia, como atalhos de teclado, organização de arquivos, e navegação eficiente. Essa função me permite compartilhar meu conhecimento e incentivar o interesse pela área de TI entre os alunos, ao mesmo tempo em que desenvolvo minhas habilidades de comunicação, paciência e didática. <br />
                            Além da monitoria, tive a oportunidade de organizar eventos, como a festa "Dark Web" para a Atlética de TI "Cibernética", o que me ajudou a aprimorar minhas habilidades de administração e planejamento, liderando equipes e coordenando toda a execução do evento de maneira eficaz.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}


