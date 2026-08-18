import './index.css'
import foto from './foto.png';
import habilidadepontualidade from './pontual.png';
import habilidadejogarbola from './bola.png';
import habilidadeandardebicicleta from './bicicleta.png';


function Sobre() {
    return (
        <main>
            <header>
                <h1>Sobre</h1>
            </header>
            <section>
                <div className='boxfotoPerfil'>
                    <img className="imgfotoPerfil" src={foto} />
                    <p> Gabriel Correia</p>
                </div>
                <div className='habilidades'>
                    <article>
                        <h2>Pontualidade</h2>
                        <p className='descrição'>
                            <img src={habilidadepontualidade} />
                            Sou pontual porque não gosto de me atrazar
                        </p>
                    </article>
                    <article>
                        <h2>Jogar Bola</h2>
                        <p className='descrição'>
                            <img src={habilidadejogarbola} />
                            Ja joguei profissional so que eu me lezionei
                        </p>
                    </article>
                    <article>
                        <h2>Andar de Bicicleta</h2>
                        <img src={habilidadeandardebicicleta} />
                        <p className='descrição'>
                            Gosto bastante e montei um sozinho
                        </p>
                    </article>
                </div>
            </section>

        </main>

    )
}

export default Sobre;