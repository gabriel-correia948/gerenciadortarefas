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
                        <p className='descricao'>
                            <img src={habilidadepontualidade} />
                            Pra mim, chegar no horário é uma questão de consideração: valorizo o tempo dos outros tanto quanto o meu. Não curto aquela correria de última hora nem o estresse de deixar alguém esperando. Prefiro me organizar com calma, garantir minha paz de espírito e mostrar que a pessoa realmente pode contar comigo.
                        </p>
                    </article>
                    <article>
                        <h2>Jogar Bola</h2>
                        <p className='descricao'>
                            <img src={habilidadejogarbola} />
                            Eu cheguei a jogar profissionalmente, mas uma lesão acabou interrompendo os meus planos no esporte. Foi um momento bem difícil ter que parar, só que a disciplina e o foco que aprendi naquela época continuam comigo até hoje.
                        </p>
                    </article>
                    <article>
                        <h2>Andar de Bicicleta</h2>
                        <img src={habilidadeandardebicicleta} />
                        <p className='descricao'>
                        Montar uma bike do zero foi uma experiência incrível. Comprei peça por peça, aprendi cada detalhe na prática e fiz tudo sozinho. Hoje, andar com ela me dá um orgulho gigante, porque sei que cada pedivela e parafuso têm o meu esforço.
                        </p>
                    </article>
                </div>
            </section>

        </main>

    )
}

export default Sobre;