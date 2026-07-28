import './App.css';
import Tarefa from './componentes/Tarefa';

//icone das redes sociais
import instagram from './instagram.png'
import github from './github.png'
import linkedin from './linkedin.png'

function App() {
  return (
    <div className="App">
      <header>
        <div>GERENCIADOR DE TAREFAS</div>
      </header>
      <nav>
        <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Tarefas</li>
        </ul>
      </nav>
      <main>
        <Tarefa></Tarefa>
      </main>
      <footer>
        <p>Desenvolvido por: khaylla</p>
        <div>
          <a href="#" ><img src={instagram} /></a>
          <a href="#" ><img src={github} /></a>
          <a href="#" ><img src={linkedin} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;

