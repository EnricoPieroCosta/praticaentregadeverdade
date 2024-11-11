import styles from './FormularioProduto.module.css'; 
import { useState } from 'react';

function FormularioProduto({ fnc }) {
    const [produto, setProduto] = useState('');
    const [produtoE, setProdutoE] = useState('');
    const [produtoV, setProdutoV] = useState('');
    const [produtoC, setProdutoC] = useState('');


    return (
        <form 
            className={styles.formulario}
            onSubmit={(e) => {
                e.preventDefault(); 
                if (produto.trim() !== "" && produtoE.trim() !== "" && produtoV.trim() !== "" && produtoC.trim() !== "") {
                    console.log(produto)
                    fnc({
                        id: Date.now(),
                        nome: produto,
                        estoque: produtoE,
                        venda: produtoV,
                        compra: produtoC
                    }); 
                }
            }}
        >
            <input 
                type="text" 
                onChange={(e) => setProduto(e.target.value)} 
                value={produto} 
                className={styles.label}
                placeholder="Adicione o nome" 
            />
            <input 
                type="text" 
                onChange={(e) => setProdutoE(e.target.value)} 
                value={produtoE} 
                className={styles.label}
                placeholder="Adicione a quantidade em estoque" 
            />
            <input 
                type="text" 
                onChange={(e) => setProdutoC(e.target.value)} 
                value={produtoC} 
                className={styles.label}
                placeholder="Adicione o valor de compra" 
            />
            <input 
                type="text" 
                onChange={(e) => setProdutoV(e.target.value)} 
                value={produtoV} 
                className={styles.label}
                placeholder="Adicione o valor de venda" 
            />
            <input 
                type="submit" 
                value="Adicionar" 
                className={styles.btn_add}
            />
        </form>
    );
}

export default FormularioProduto; 
