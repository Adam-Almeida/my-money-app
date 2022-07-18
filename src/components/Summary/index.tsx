import { Container } from "./style"
import { TransactionContext } from "../../TransactionsContext"
import entradasImg from "../../assets/entradas.svg"
import saidasImg from "../../assets/saidas.svg"
import totalImg from "../../assets/total.svg"
import { useContext } from "react"

export function Summary(){

    const {transactions} = useContext(TransactionContext)

    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saidas" />
                </header>
                <strong>-R$ 500,00</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}