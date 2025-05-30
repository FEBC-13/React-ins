import Reaction from '../gdlib.js';
import Counter from './components/Counter.js';
import Header from './components/Header.js';

function App(){
  console.log('App 호출됨');
  return (
    Reaction.createElement('div', { id: 'app' }, 
      Header, 
      Counter
    )
  );
}

export default App;
