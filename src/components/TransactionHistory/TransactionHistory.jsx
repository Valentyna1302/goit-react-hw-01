import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionTable}>
      <thead className={css.transactionTableTitle}>
        <tr>
          <th className={css.transactionTableItem}>Type</th>
          <th className={css.transactionTableItem}>Amount</th>
          <th className={css.transactionTableItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.transactionTableList} key={item.id}>
              <td className={css.transactionTableItem}>{item.type}</td>
              <td className={css.transactionTableItem}>{item.amount}</td>
              <td className={css.transactionTableItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
