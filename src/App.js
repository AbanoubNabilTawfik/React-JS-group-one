import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FuncClick from './Components/FuncClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import Parent from './Components/Parent';
import User from './Components/User';
import NameList from './Components/NameList';

function App() {
  return (
    <div className="App">
      <Parent/>
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
         
         {/* <Counter/> */}
         {/* <Greet  name="Ahmed"  age="50">
          <p>This is child paragraph</p>
         </Greet>

         <Welcome name="Sara"   age="20"/> */}

         {/* <FuncClick/>
         <ClassClick/> */}
         {/* <EventBind/> */}

         {/* <User/> */}

         <NameList/>
    </div>
  );
}

export default App;
