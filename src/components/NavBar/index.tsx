import styles from './styles.module.scss';
import '../../styles/global.scss';
import { getTranslation } from '../../../locales/utils/getTranslation';

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
            <div>
                <ul className={styles.userContainer}>
                    <li>{lang.login}</li>
                    <li>{lang.cart}</li>
                </ul>
            </div>
        </div>
    )
}
