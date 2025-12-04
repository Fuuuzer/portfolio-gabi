import './App.css'
import Header from './components/Header'
import star from './assets/img/star.svg';
import { ReactLenis, useLenis } from 'lenis/react'


function App() {
  const lenis = useLenis((lenis) => {
    console.log(lenis)
  })

  return (
    <>
      <ReactLenis root />
      <Header />
      <main className='container'>
        <div className='about-container'>
          <h2>Oie! :)</h2>
          <div className='about'>
            <h1>Sobre mim</h1>
            <p>Sou fotógrafa de Esteio, no Rio Grande do Sul. Trabalho com fotografia de eventos, ensaios e retratos, sempre buscando registrar momentos com leveza, afeto e autenticidade. Acredito que cada imagem carrega uma história e o meu olhar é voltado para transformar essas histórias em memórias cheias de significado :)</p>
            <img src="./gabrielle.png" alt="" />
          </div>
        </div>
      </main>
      <section className='ensaios-section'>
        {/* <h2 className='ensaios-title'>Trabalhos Recentes</h2> */}

        <div className='ensaio-1'>
          <div className='ensaio-1-sobre'>
            <p className='title'>Festival Feijoada com Samba</p>
            <p className='description'> <img className='star' src={star} alt="" />Eventos e Festivais</p>
          </div>
        </div>


        <div className='ensaio-1'>
          <img src="./duda.jpg" alt="" />
          <p className='title'>Eduarda Bolzan</p>
          <p className='description'>Ensaio pessoal</p>
        </div>

        <div className='ensaio'>
          <img src="./aniversarioLuiza.jpg" alt="" />
          <p className='title'>Aniversário Luiza</p>
          <p className='description'>Aniversário</p>
        </div>

        <div className='ensaio'>
          <img src="./GiovanaEFernando.jpg" alt="" />
          <p className='title'>  Giovana & Fernando</p>
        </div>

      </section>
    </>
  )
}

export default App
