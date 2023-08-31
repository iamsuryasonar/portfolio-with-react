import s from './Skills_page.module.css'
import Footer from '../../Components/Footer/Footer'
import skills from '../../Data/skills'

function SkillsPage() {
    return (
        <><div className={s.main}>
            <div className={s.wrapper}>
                <h1>Skills</h1>
                <p>
                    These are some languages,frameworks and tools that I have experience
                    with.
                </p>
                <div className={s.skill_grid}>
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
            </div>
        </div >
            <Footer> </Footer>
        </>
    )
}

export default SkillsPage;