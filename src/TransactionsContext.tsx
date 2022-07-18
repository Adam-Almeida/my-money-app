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
    createTransaction: (transaction: CreateTransactionInput)=> void;
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

    function createTransaction(transaction: CreateTransactionInput){
        api.post('/transactions', transaction)
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
        {children}
        </TransactionContext.Provider>

    )
}