import { useEffect, useState } from "react";
import { httpGetTransactions } from "./requests";

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");

    const fetchTransactions = async () => {
      const transactionsData = await httpGetTransactions(page);
      setTransactions(transactionsData);
    };

    fetchTransactions();
  }, []);

  return transactions;
};

export default useTransactions;