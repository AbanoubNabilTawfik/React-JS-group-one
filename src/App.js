import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
         {/* <Greet name="Mohamed" age="30"/>
         <Greet name="Sara"   age="20"/>
         <Greet name="Ahmed"  age="50"/>
         <Greet>
          <p>This is children data</p>
         </Greet> */}

         {/* <Welcome/>
         <Hello/> */}

         {/* <Welcome name="Mohamed" age="30" />
         <Welcome name="Sara"   age="20"/>
         <Welcome name="Ahmed"  age="50"/> */}

         {/* <Message/> */}
         <Counter/>
    </div>
  );
}

export default App;
