import { createContext, useEffect, useState } from "react";
import useTransactions from "../hooks/useTransactions";

export const TransactionsContext = createContext([]);

export const TransactionsProvider = ({ children }) => {
    const transactions = useTransactions();

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );
};
