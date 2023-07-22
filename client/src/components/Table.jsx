import React from "react";

function Table({ headings, data, renderItem }) {
    return (
        <table>
            <thead>
                <tr>
                    {headings.map((heading) => (
                        <th key={heading}>{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{data.map((item) => renderItem(item))}</tbody>
        </table>
    );
}

export default Table;
