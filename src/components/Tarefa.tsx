import {useState} from 'react'
import styles from './Terefa.module.css';
import {Trash} from 'phosphor-react';
interface PropsTarefa{
  conteudo:string;
  id:number;
  ckecked:boolean;
  onDeleteTarefa:(tarefa:number) => void;
  onChangeCheked:(id:number) => void;

}

export function Tarefa({id,conteudo,ckecked,onDeleteTarefa,onChangeCheked}:PropsTarefa){

    const handleChange = () => {
        onChangeCheked(id);
      };

      function handleDeleteTarefa(){
        onDeleteTarefa(id);
      }
    return(
        <div className={styles.container}>
          <div className={styles.checkbox}>
            <input
             type="checkbox"
             checked={ckecked}
             onChange={handleChange}
             
             /> 
           </div>
           <p className={ckecked ? styles.texto : ''}>
             {conteudo}
           </p>

           <footer>
             <Trash onClick={handleDeleteTarefa} size={19} />
           </footer>
        </div>
    );
}