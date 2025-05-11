import './style.css'
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'

function Home() {

  return (
    <>
      <Header />
      <div className='page'>
        <h1>Olá AstroBlog</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure et dolorem laborum, perspiciatis magnam adipisci odio, cupiditate ad tenetur aut fugit consequuntur sit cumque harum? Possimus accusamus culpa earum eaque?</p>
        <h1>Titulo2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo veritatis laudantium harum facere necessitatibus dolorum voluptate dolor eligendi exercitationem iusto magnam dolores laboriosam, aperiam omnis laborum asperiores atque ullam.</p>
      </div>
      <Footer />
    </>

  )
}

export default Home
