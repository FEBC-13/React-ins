import Header from "@components/Header";
import Counter from "@components/Counter";

function App(){
  return (
    <div id="app">
      <Header />
      <Counter>4</Counter>
      <Counter>10</Counter>
    </div>
  );
}

export default App;