import React from "react";
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

  console.log(initialData);

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
          <Body/>
        </tbody>
      </table>
    </div>
  );
}

const Body = () => {
  return (
    <tr>
      {initialData.map((item, id) => {
        <Row
          creditorName={item.creditorName}
          firstName={item.firstName}
          lastName={item.lastName}
          minPaymentPercentage={item.minPaymentPercentage}
          balance={item.balance}
        />
      })}
    </tr>
  )
}

const Row = (props) => {
  return (
    <span>{props.creditorName}</span>
  )
}

export default hot(App);