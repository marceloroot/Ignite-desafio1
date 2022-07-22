import {ChangeEvent, useState} from 'react';
import {Header} from './components/Header';
import styles from './App.module.css';
import {PlusCircle} from 'phosphor-react';
import "./global.css";
import { Tarefa } from './components/Tarefa';
import Clipboard from './assets/Clipboard.svg';
interface PropsTerefas{
  id:number;
  conteudo:string;
  ckecked:boolean;
}
function App() {
  
  const [tarefas,setTarefas] = useState<PropsTerefas[]>([]);

  const [novaTarefa,setNovaTarefa] =useState('');
  

  function handleOnchangeTarefa(event:ChangeEvent<HTMLInputElement>){
    setNovaTarefa(event.target.value);
  }
  function handleCriarNovaTarefa(){
      const idTarefas =  tarefas.length +1;
      const draftTarefa = {
        id:idTarefas,
        conteudo:novaTarefa,
        ckecked:false,
      }
      setTarefas([...tarefas,draftTarefa]);

  }

  function onDeleteTarefa(tarefa:number){
   const tarefaSemUmElemetno = tarefas.filter(tarefaDeletada =>{
    return tarefa !== tarefaDeletada.id;
   }) 

   setTarefas(tarefaSemUmElemetno);
  }

  function onChangeCheked(id:number){
   const tarefasDraft = tarefas.map(tarefa=>{
      if(tarefa.id == id){
        tarefa.ckecked = !tarefa.ckecked; 
      }
      return tarefa;
    })
    
    setTarefas(tarefasDraft);
  }


  const seVazioNovaTarefa = novaTarefa.length === 0;
  let quantidadeNomes = tarefas.reduce(function (todosNomes, tarefa) {
    if (tarefa.ckecked === true) {
      todosNomes++;
    }
   
    return todosNomes;
  }, 0);

 

  return(
    <>
    <Header title="Header dinamico" />
    <div className={styles.container}>
    <article className={styles.busca}>
      
        <input
          placeholder="adiciona uma nova tarefa"
          value={novaTarefa}
          onChange={handleOnchangeTarefa}
        />
        <button onClick={handleCriarNovaTarefa} disabled={seVazioNovaTarefa}>
          Criar
          <PlusCircle size={22} />
          </button>

    </article>
    <article className={styles.boxTexto}>
      <p>Tarefas criadas <span>{tarefas.length}</span></p>
      <p>Conluídas <span>{quantidadeNomes} de {tarefas.length}</span></p>
    </article>
    <div className={styles.tarefas}>
    {(tarefas.length >0 )
    ?
     tarefas.map(tarefa =>(
       <Tarefa    key={tarefa.id}  
       conteudo={tarefa.conteudo} 
        id={tarefa.id}
        ckecked={tarefa.ckecked} 
        onDeleteTarefa={onDeleteTarefa} 
        onChangeCheked={onChangeCheked}/>
     ))
     :
     <div className={styles.vazio}>
      <img  src={Clipboard} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
   
    }
    </div>
    
    </div>
    </>
  );
}

export default App
