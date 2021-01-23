import './App.css';
import client from './Config/gl-config';
import { ApolloProvider } from '@apollo/client';
import Courses from "./Courses";
function App() {
  return (
    <ApolloProvider client={client}>
      
    <div>
      <h1>Hello World</h1>
      <Courses/>
    </div> 
    </ApolloProvider>
  );
}

export default App;
