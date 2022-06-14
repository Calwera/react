import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 12) },
    { title: "Pilot", amount: 200, date: new Date(2022, 3, 6) },
    { title: "jonh", amount: 10, date: new Date(2020, 6, 3) },
    { title: "Home", amount: 20, date: new Date(2022, 3, 6) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
