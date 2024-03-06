import Link from "next/link";
import Menu from "./componentes/Menu";


export default function NotFound(){
    return(
        <body><Menu/>
        <div className="Card">
             <h1>Página não existente!</h1>
             <button><Link href="/">Voltar para Home</Link></button>
        </div>
        </body>
    );
}