import './App.scss';
import { Layout } from './layout/layout';
import { HomePage } from './pages/home-page';

function App() {
  return (
    <div className="App">
      <Layout><HomePage/></Layout>
    </div>
  );
}

export default App;
