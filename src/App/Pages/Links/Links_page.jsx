import s from './Links_page.module.css'
import Footer from '../../Components/Footer/Footer.jsx'
import links from '../../Data/links'

function LinkPage() {
    return (
        <><div className={s.main}>
            <div className={s.wrapper}>
                <h1>Links</h1>
                <div className={s['contact-icons']}>
                    <a className={s.iconcontact} href="linkedin">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className={s.iconcontact} href="instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className={s.iconcontact} href="github">
                        <i className="fab fa-github"></i>
                    </a>
                </div >
                {links.map((link) => {
                    return (
                        <div className={s.link_cards}>
                            <a
                                href={link.url}
                                className={s.link_card}
                                key={link.id}
                            >
                                <p className={s.link_title}>
                                    {link.title}
                                </p>
                            </a>
                        </div >
                    )
                })}
            </div >
        </div >
            <Footer> </Footer></>
    )
}

export default LinkPage;