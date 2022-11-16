import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_APP_BASE_URL);
  return (
  

    <div className='bg-purple-500'>
    <h1 className="text-6xl font-bold ">
  {process.env.REACT_APP_APP_BASE_URL}
  </h1>

  </div>

  );
}

export default App;
