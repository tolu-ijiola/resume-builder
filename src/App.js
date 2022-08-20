import './App.css';
import Step from './components/steps';
import Navigation from './components/navigation';
import { useState } from 'react';

function App() {

  const [completed, setcompleted] = useState(1)

  return (
    <div className="homepage">
      <Step setcompleted={setcompleted}/>
      <Navigation completed={completed}/>
    </div>
  );
}

export default App;
