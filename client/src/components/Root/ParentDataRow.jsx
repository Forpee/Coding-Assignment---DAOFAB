import React from "react";
import { Link } from "react-router-dom";

function ParentDataRow({ transaction }) {
    return (
        <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.sender}</td>
            <td>{transaction.receiver}</td>
            <td>{transaction.totalAmount}</td>
            <td>
                <Link
                    className="child-transaction-link"
                    state={{ transaction }}
                    to={`/childTransactions/${transaction.id}`}
                >
                    {transaction.childData?.totalAmount}
                </Link>
            </td>
        </tr>
    );
}

export default ParentDataRow;
