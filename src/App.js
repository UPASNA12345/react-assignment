
import { Layout} from 'antd';
import Navbar from './components/Navbar/navbar'
import Home from './views/Home';



import './App.css';


const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>  
          <Navbar/>
          </Header>
          <Content className="site-layout" >
            <Home />
          </Content>
        </Layout>
    </div>

  );
}

export default App;
