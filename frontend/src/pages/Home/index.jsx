import './style.css'
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div className='page'>
        
       <h1 style={{ marginBottom: '20px' }}>Nave soviética que falhou em missão cai de volta na Terra após 53 anos</h1>
        <p style={{ marginBottom: '20px' }}>
          Uma nave espacial da era soviética, projetada para fazer um pouso suave em Vênus — mas que permaneceu presa na órbita da Terra por décadas —, caiu do céu na madrugada deste sábado (10), segundo a agência espacial russa, Roscosmos.
        </p>

        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            maxWidth: '100%',
            marginBottom: '20px'
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/w7JzTyqPrBo"
            title="Vídeo da nave Kosmos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
