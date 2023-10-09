import styles from './styles.module.scss';
import '../../styles/global.scss';
export default function NavBar() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.logoCard}>logo</div>
            <div>
                <ul>
                    <li>Inicio</li>
                    <li>Comprar</li>
                    <li>Vender</li>
                    <li>Ajuda</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Entrar</li>
                    <li>Carrinho</li>
                </ul>
            </div>
        </div>
    )
}
