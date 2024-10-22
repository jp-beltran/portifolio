import styles from './Projects.module.css'; 
import { ProjectContainer } from '../ProjectContainer/ProjectContainer';


export function Projects() {
    return (
        <section  id='projects' className={styles.section}>
            <h2>Projetos</h2>

                <ProjectContainer/>


        </section>
    );
}