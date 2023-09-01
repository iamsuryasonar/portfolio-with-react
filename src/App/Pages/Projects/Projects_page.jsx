import s from './Projects_page.module.css'
import Footer from '../../Components/Footer/Footer'
import projects from '../../Data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectsPage() {
    return (
        <><div className={s.main}>
            <div className={s.wrapper}>
                <h1>Projects</h1>
                <div className={s.project_grid}>
                    {projects.map((project) => {
                        console.log(project)
                        return (
                            <div className={s.project_card} key={project.id}>
                                <a target='_blank' rel='noopener noreferrer' href={project.url} className={s.anchor}>
                                    <img className={s.projectimages} src={project.image} alt="" />
                                </a>
                                <div className={s.projecticons}>
                                    {project.icons.map((icon) => {
                                        return (<div className={s.icon} key={icon.id}>
                                            <FontAwesomeIcon icon={icon.icon} />
                                        </div>)
                                    })}
                                </div>
                                <a target='_blank' rel='noopener noreferrer' href={project.source_code} className={s.projecttitle}>
                                    {project.title}
                                </a>
                                <p className={s['build-with']}>
                                    {project.build_info}
                                </p>
                                <p className={s.description}>
                                    {project.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div >
        </div >
            <Footer> </Footer>
        </>
    )
}

export default ProjectsPage;