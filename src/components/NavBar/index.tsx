import styles from './styles.module.scss';
import '../../styles/global.scss';
import { getTranslation } from '../../../locales/utils/getTranslation';
import { FaUserLarge, FaCartShopping } from "react-icons/fa6";

import NavButton from '../UI/NavButton';

interface NavBarProps {
    params: {
        lang: string;
      }
}
export default async function NavBar({params}: NavBarProps) {
    const lang = await getTranslation(params.lang);    
    return (
        <div className={styles.navContainer}>
            <div className={styles.logoCard}>logo</div>
            <div>
                <ul className={styles.navItems}>
                    <li>{lang.initial}</li>
                    <li>{lang.buy}</li>
                    <li>{lang.sell}</li>
                    <li>{lang.help}</li>
                </ul>
            </div>
            <div className={styles.NavButtonContainer}>
                <NavButton />
            </div>
            <div>
                <ul className={styles.userContainer}>
                    <li><FaUserLarge width={24} height={18}/></li>
                    <li><FaCartShopping width={24} height={18} /></li>
                </ul>
            </div>
        </div>
    )
}
