import { Container } from "./style"
import { TransactionContext } from "../../TransactionsContext"
import entradasImg from "../../assets/entradas.svg"
import saidasImg from "../../assets/saidas.svg"
import totalImg from "../../assets/total.svg"
import { useContext } from "react"

export function Summary(){

    const {transactions} = useContext(TransactionContext)

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        }else{
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })


    function formatCurrency(value: any){
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    }
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>{formatCurrency(summary.deposits)}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saidas" />
                </header>
                <strong>- {formatCurrency(summary.withdraws)}</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{formatCurrency(summary.total)}</strong>
            </div>
        </Container>
    )
}