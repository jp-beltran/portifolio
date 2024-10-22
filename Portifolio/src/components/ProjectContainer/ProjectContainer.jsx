import styles from './ProjectContainer.module.css';

export function ProjectContainer() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles['project-wrapper-info']}>
                    <h3>ReactShop</h3>
                    <p>Este projeto é uma loja de camisas simples que desenvolvi durante a monitoria de React no UniCEUB, com o objetivo de praticar e demonstrar habilidades em HTML e CSS. O foco da atividade foi a criação de uma interface agradável e funcional, trabalhando com layouts responsivos, organização de elementos visuais e estilização de componentes como botões e imagens de produtos. Apesar de ser uma monitoria de React, o projeto se concentrou nas técnicas fundamentais de front-end, oferecendo uma base sólida para o desenvolvimento de interfaces web, especialmente em ambientes de e-commerce.</p>
                    <a href="https://github.com/jp-beltran/ReactShop" target='_blank'>
                        <button>CÓDIGO</button>
                    </a>
                </div>
            

                <div className={styles['project-wrapper-img']}>
                    <img src="https://i.imgur.com/DR7Roz7_d.webp?maxwidth=760&fidelity=grand" alt="" />
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles['project-wrapper-info']}>
                    <h3>FotoBlog</h3>
                    <p>FotoBlog é um projeto de um blog de fotografias, desenvolvido utilizando HTML e CSS. Este repositório contém todo o código fonte necessário para criar e estilizar um blog de fotografias moderno e responsivo. O projeto foi realizado como parte do curso da Rocketseat na trilha EXPLORER</p>
                    <a href="https://github.com/jp-beltran/FotoBlog" target='_blank'>
                        <button>CÓDIGO</button>
                    </a>
                </div>

                <div className={styles['project-wrapper-img']}>
                    <img src="https://i.imgur.com/dcpDjtA_d.webp?maxwidth=760&fidelity=grand" alt="" />
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles['project-wrapper-info']}>
                    <h3>ToDo List</h3>
                    <p>Este repositório contém um projeto de lista de tarefas (To-do List) desenvolvido durante a monitoria de React no UniCEUB, com o objetivo de reforçar a prática de desenvolvimento front-end. O projeto visa proporcionar aos alunos a oportunidade de aplicar conceitos fundamentais de React, como gerenciamento de estado, componentes funcionais e hooks, além de boas práticas de estruturação de pastas e estilização utilizando CSS. A atividade foca na criação de uma interface dinâmica e interativa, onde os usuários podem adicionar, remover e marcar tarefas como concluídas, simulando um cenário real de desenvolvimento front-end.</p>
                    <a href="https://github.com/jp-beltran/ToDoList" target='_blank'>
                        <button>CÓDIGO</button>
                    </a>
                </div>

                <div className={styles['project-wrapper-img']}>
                    <img src="https://i.imgur.com/13wKaM1_d.webp?maxwidth=760&fidelity=grand" alt="" />
                </div>
            </div>
            
        </section>
    );
}