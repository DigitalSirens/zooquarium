import { Outlet } from 'react-router-dom';

import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
