import {useLocation} from 'react-router-dom'
import styles from './Projects.module.css';
import Message from '../layouts/Message';
import Container from '../layouts/Container';
import LinkButton from '../layouts/LinkButton';

function Projects(){
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }
    return(
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {Message && <Message msg={message} type="success"/>}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
        </div>
    )
}

export default Projects