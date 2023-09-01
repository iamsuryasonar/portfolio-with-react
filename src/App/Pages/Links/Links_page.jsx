import s from './Links_page.module.css'
import Footer from '../../Components/Footer/Footer.jsx'
import links from '../../Data/links'
import { Link } from 'react-router-dom'
import social_media from '../../Data/social_media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LinkPage() {
    return (
        <><div className={s.main}>
            <div className={s.wrapper}>
                <h1>Links</h1>
                <div className={s['contact-icons']}>
                    {social_media.map((data) => {
                        return (
                            <a target='_blank' rel='noopener noreferrer' href={data.url} key={data.id}>
                                <FontAwesomeIcon className={s.icon} icon={data.icon} />
                            </a>
                        )
                    })}
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