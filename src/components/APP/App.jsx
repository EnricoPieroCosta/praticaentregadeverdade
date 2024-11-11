import { useState } from "react";
import styles from './App.module.css'
import FormularioProduto from "../FormularioProduto/FormularioProduto";
import ListaEstoque from "../ListaEstoque/ListaEstoque"

function App(){
    const [produtos, setProdutos] = useState([])

    const addProduto = (obj) => {
        console.log(obj)
        console.log(produtos)
        setProdutos([...produtos,obj])
        console.log(obj)
        console.log(produtos)
    }
    
    // const removeTask = (taskId) =>{
    //     setTasks(tasks.filter(task => task.id != taskId))
    // }
    // const editTask = (taskId,newText) =>{
    //     let index = tasks.findIndex(task => task.id == taskId)
    //     tasks[index].text = newText
    //     setTasks(tasks)
    // }
    // const toggleComplete = (taskId) =>{

    // }
    // const setFilters = (filter) =>{
    //     if(filter == "All"){
    //         setFilteredTasks(tasks)
    //     }
    //     else if(filter == "Completed"){
    //         let completeTasks = tasks.filter(task => task.completed == true)
    //         console.log(completeTasks);
            
    //         setFilteredTasks(completeTasks)
    //     }
    //     else if(filter == "Incomplete"){
    //         let incompleteTasks = tasks.filter(task => task.completed == false)
    //         console.log(incompleteTasks);

    //         setFilteredTasks(incompleteTasks)
    //     }
    // }
    return (
    <>
        <FormularioProduto fnc={addProduto}/>
        <ListaEstoque list={produtos}/>
    </>
    );
}
export default App;