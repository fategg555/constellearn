import logo from './logo.svg';
import './App.css';
import Header from './header';

function App() {
  let loggedIn = true;
  if (loggedIn) {
    return (
      <Header> </Header>
    );
  } else {
    return (
      <p> go sign in !! </p>
    )
  }
}

export default App;
