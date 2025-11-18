import { useEffect, useRef, useState } from 'react';
import responseMock, { Transaction } from '../../services/mock';


function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const startRangeInput = useRef<HTMLInputElement>(null);
  const endRangeInput = useRef<HTMLInputElement>(null);

  const handleSearch = () => {  
    const startRange = startRangeInput.current;
    const endRange = endRangeInput.current;
    if (startRange && endRange) {
      const startValue = startRange.value;
      const endValue = endRange.value;

      if (startValue && endValue) {
        const filteredTransactions = transactions.filter((transaction) => transaction.amount >= Number(startValue) && transaction.amount <= Number(endValue));
        setTransactions(filteredTransactions);
      } else {
        setTransactions(responseMock.data.transactions);
      }
    }
  };

  useEffect(() => {
    setTransactions(responseMock.data.transactions);
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <div>
        <input type="value" id="startRange" ref={startRangeInput} /> <label htmlFor="startRange">Start Range</label>
        <input type="value" id="endRange" ref={endRangeInput} /> <label htmlFor="endRange">End Range</label>
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;