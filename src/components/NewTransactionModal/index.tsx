import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./style";
import closeImg from "../../assets/fechar.svg";
import entradasImg from "../../assets/entradas.svg";
import saidasImg from "../../assets/saidas.svg";
import { api } from "../../services/api";
import { TransactionContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose,}: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit')
    const [category, setCategory] = useState('')

    const { createTransaction } = useContext(TransactionContext)

    function handleCreateNewTransaction(e: FormEvent) {
        e.preventDefault()
        createTransaction({
          title,
          amount,
          category,
          type,
        })
    }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar" className="react-modal-close" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
            placeholder="Título"
            value={title}
            onChange= {e => setTitle(e.target.value)}    
        />
        <input 
            type="number"
            placeholder="Valor"
            value={amount}
            onChange= {event => setAmount(Number(event.target.value))}  
        />

        <TransactionTypeContainer>

          <RadioBox 
            type="button"
            onClick={() => setType('deposit')}
            isActive= {type === 'deposit'}
            activeColor= 'green'
          >
            <img src={entradasImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={() => setType('withdraw')}
            isActive= {type === 'withdraw'}
            activeColor= 'red'
          >
            <img src={saidasImg} alt="Saidas" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input
            placeholder="Categoria"
            value={category}
            onChange= {event => setCategory(event.target.value)}      
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
