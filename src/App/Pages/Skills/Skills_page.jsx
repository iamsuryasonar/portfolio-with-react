import s from './Skills_page.module.css'
import Footer from '../../Components/Footer/Footer'
import skills from '../../Data/skills'
import text from '../../Data/text'

function SkillsPage() {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h1>Skills</h1>
                <p>
                    {text.skills_intro}
                </p>
                <ul className={s.skill_card}>
                    {
                        skills.map((skill) => {
                            return <li key={skill.id}>
                                <img className={s.skill_icon} src={skill.image} alt="" />
                            </li>
                        })
                    }
                </ul>
            </div>
        </div >
    )
}

export default SkillsPage;