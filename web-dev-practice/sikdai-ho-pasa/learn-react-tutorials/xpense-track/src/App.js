import './App.css';
import ExpenseItem from './components/ExpenseItem';
// root component
function App() {
  return (
    <div className="App">
      {/* Custom made component */}
     <ExpenseItem />
    </div>
  );
}

export default App;
