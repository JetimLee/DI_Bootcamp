import "./App.css";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);

  const getTotal = () => {
    const tipToPercentage = tip * 0.01;
    const tips = Number(tipToPercentage * bill);
    console.log(`here is tips ${tips}`);
    const billNumber = Number(bill);
    console.log(`here is tips ${tip}`);
    const billAndTip = Number(billNumber + tips);
    console.log(billAndTip);

    setTotal(billAndTip);
  };

  const handleBill = (e) => {
    const inputtedBill = e.target.value;
    setBill(inputtedBill);
    console.log(bill);
    console.log(typeof bill);
  };
  const handleTip = (e) => {
    // console.log(e.target.value);
    const inputtedTip = e.target.value;
    setTip(inputtedTip);
    console.log(tip);
    console.log(typeof tip);
  };
  return (
    <div className="calculator_container">
      <h1>Tip Calculator</h1>
      <div className="form_control">
        <label htmlFor="bill">Bill (in $)</label>
        <input onChange={handleBill} type="number" id="bill_value" />
      </div>

      <div className="form_control">
        <label htmlFor="tip">Tip %</label>
        <input onChange={handleTip} type="number" id="tip_value" />
      </div>

      <footer>
        <div className="result">
          <span>Total:</span> <strong id="total">{total}</strong>
          <button onClick={getTotal}>Get total</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
