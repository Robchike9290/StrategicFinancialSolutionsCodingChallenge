import React, {useState} from "react";
import { hot } from 'react-hot-loader/root';

let initialData = [
  {
    "id": 1,
    "creditorName": "CBNA",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 2.00,
    "balance": 1363.00
  },
  {
    "id": 2,
    "creditorName": "AMEX",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 2.00,
    "balance": 2763.00
  },
  {
    "id": 3,
    "creditorName": "AMEX",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 2.00,
    "balance": 429.00
  },
  {
    "id": 4,
    "creditorName": "AMEX",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 2.00,
    "balance": 1363.00
  },
  {
    "id": 5,
    "creditorName": "DISCOVERBANK",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 2.00,
    "balance": 2644.00
  },
  {
    "id": 6,
    "creditorName": "CAPITAL ONE",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 4.00,
    "balance": 5464.00
  },
  {
    "id": 7,
    "creditorName": "CAPITAL ONE",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 4.00,
    "balance": 2345.00
  },
  {
    "id": 8,
    "creditorName": "CAPITAL ONE",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 4.00,
    "balance": 836.00
  },
  {
    "id": 9,
    "creditorName": "CBNA",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 3.50,
    "balance": 687.00
  },
  {
    "id": 10,
    "creditorName": "CBNA",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 3.50,
    "balance": 235.00
  }
]

const App = () => {
  let [data, setData] = useState(initialData);
  let [checkedData, setCheckedData] = useState(new Array(data.length).fill(false));
  let [total, setTotal] = useState(0);
  let [numberOfDataChecked, setNumberOfDataChecked] = useState(0);

  const addData = () => {
    let id = data.length + 2;
    let updatedData = data.slice();
    updatedData.push({
      "id": id,
      "creditorName": "Frost Bank",
      "firstName": "Joe",
      "lastName": "Davids",
      "minPaymentPercentage": 7.00,
      "balance": 5000.00
    });

    let updatedCheckedData = checkedData.slice();
    updatedCheckedData.push(false);

    setCheckedData(updatedCheckedData);
    setData(updatedData);
  }

  const removeData = () => {
    let updatedData = data.slice();
    let updatedCheckedData = checkedData.slice();
    let checkedDebtToRemove = 0;
    let boxesChecked = numberOfDataChecked;
    let updatedTotal = total;
    let checkboxToRemove = updatedCheckedData[updatedCheckedData.length - 1];
    let dataToRemove = updatedData[updatedData.length - 1];

    if (checkboxToRemove === true) {
      checkedDebtToRemove = updatedData[updatedData.length - 1].balance;
      boxesChecked--;
    }
    updatedTotal -= checkedDebtToRemove;

    updatedData.pop();
    updatedCheckedData.pop();

    setNumberOfDataChecked(boxesChecked);
    setTotal(updatedTotal);
    setCheckedData(updatedCheckedData);
    setData(updatedData);
  }

  const handleCheckboxChange = (event) => {
    let boxesChecked = numberOfDataChecked;
    const updatedCheckedData = checkedData.slice();
    for (let i = 0; i < updatedCheckedData.length; i++) {
      let selectedCheckbox = Number(event.target.id.toString().replace('custom-checkbox-', ''));
      if (i === selectedCheckbox) {
        updatedCheckedData[i] = !updatedCheckedData[i];
        boxesChecked++;
      }
    };

    setNumberOfDataChecked(boxesChecked);
    setCheckedData(updatedCheckedData);

    const totalDebt = updatedCheckedData.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + data[index].balance;
        }
        return sum;
      },
      0
    );

    setTotal(totalDebt);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="column"></th>
            <th className="column">Creditor</th>
            <th className="column">First Name</th>
            <th className="column">Last Name</th>
            <th className="column">Min Pay %</th>
            <th className="column">Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="column">
                <input id={`custom-checkbox-${index}`} onChange={handleCheckboxChange} type="checkbox"></input>
                </td>
              <td className="column">{item.creditorName}</td>
              <td className="column">{item.firstName}</td>
              <td className="column">{item.lastName}</td>
              <td className="column right">{item.minPaymentPercentage.toFixed(2) + '%'}</td>
              <td className="column right">{item.balance.toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td><button onClick={addData}>Add Debt</button></td>
            <td><button onClick={removeData}>Remove Debt</button></td>
          </tr>
          <tr>
            <td>Total</td>
            <td colSpan="5" className="right">${total.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="2">Total Row Count:</td>
            <td className="left">{data.length}</td>
            <td>Check Row Count:</td>
            <td className="left">{numberOfDataChecked}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default hot(App);