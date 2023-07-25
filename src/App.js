import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <h1>app</h1>
      <Header/>
      <Content/>
      <Footer/>
      </Router>
    </div>
  );
}



export default App;
