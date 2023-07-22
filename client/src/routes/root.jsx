import { useContext } from "react";
import "../App.css";
import ParentDataRow from "../components/Root/ParentDataRow";
import Table from "../components/Table";
import { TransactionsContext } from "../contexts/transactions.context";

function Root() {
    const transactions = useContext(TransactionsContext);
    const headings = [
        "ID",
        "Sender",
        "Receiver",
        "Total Amount",
        "Total Paid Amount",
    ];
    return (
        <div className="App">
            <Table
                headings={headings}
                data={transactions}
                renderItem={(transaction) => (
                    <ParentDataRow transaction={transaction} />
                )}
            />
        </div>
    );
}

export default Root;
