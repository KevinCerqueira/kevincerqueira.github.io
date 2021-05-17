import '../assets/css/Home.css';
import Menu from '../components/Menu'
import Main from '../components/Main'

function Home() {
  return (
    <div className="home flex-container">
      <div className="flex-item">
        <Menu />
      </div>
      <div className="flex-grow-2">
        <Main />
      </div>
    </div>
  );
}

export default Home
