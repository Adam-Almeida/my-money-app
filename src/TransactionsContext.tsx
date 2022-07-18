import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type CreateTransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: CreateTransactionInput)=> Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData)

interface TransactionProviderProps{
    children: ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
        
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: CreateTransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data

        setTransactions([...transactions, transaction])
   
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
        {children}
        </TransactionContext.Provider>

    )
}