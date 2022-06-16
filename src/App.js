import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/shared/Layout';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/" element={<Rockets />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
