import Link from "next/link";
import Imagem from "next/image";
import styles from "./footer.module.css"
export default function footer(){
    return(
    <footer className={styles.footer}>
        <nav>
            <Link href="https://ead.ifms.edu.br/">
            <Imagem
             width={100}
             height={100}
             src={"https://moodles.org/theme/moodleorg/pix/moodle_logo_TM.svg"} />
             </Link>
        <h1>Footer</h1>
        </nav>

    </footer>
    );
};