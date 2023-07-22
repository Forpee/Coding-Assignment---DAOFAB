import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TransactionsContext } from "../contexts/transactions.context";
import Table from "../components/Table";

function Child() {
    const {
        state: { transaction },
    } = useLocation();

    const headings = [
        "ID",
        "Sender",
        "Receiver",
        "Total Amount",
        "Paid Amount",
    ];

    return (
        <div>
            <Table
                headings={headings}
                data={transaction?.childData?.childTransactions}
                renderItem={(child) => (
                    <tr key={child.id}>
                        <td>{child.id}</td>
                        <td>{transaction.sender}</td>
                        <td>{transaction.receiver}</td>
                        <td>{transaction.totalAmount}</td>
                        <td>{child.paidAmount}</td>
                    </tr>
                )}
            />
        </div>
    );
}

export default Child;
