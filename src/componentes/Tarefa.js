import { useState } from "react";
import CadastrarTarefas from './cadastrarTarefa'
import './estilo.css'

import ListarTarefas from "./ListarTarefas";
import baseTarefas from "./baseTarefas";

export default function Tarefa() {
    const [tarefas, setTarefas] = useState(baseTarefas);

    return(
        <section className="tarefas">
            <CadastrarTarefas tarefas={tarefas} setTarefas={setTarefas} />
            <ListarTarefas tarefas={tarefas} />
        </section>
    );
}