import styles from "./ItemEstoque.module.css"
function ItemEstoque({ prod, index }){
    return(
        <>
        <li className={styles.produtoItem} key={index}>Nome: {prod.nome}, Estoque: {prod.estoque}, Valor Venda: {prod.venda}</li>
        </>
    )
   
}
export default ItemEstoque;