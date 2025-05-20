import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo</h1>
      <Link to="/astroblog" className="astroblog-link">
        Acessar AstroBlog
      </Link>
      {/* Restante do conteúdo */}
    </div>
  );
};

export default Home;