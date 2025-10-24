import './App.css'
import Header from './components/Header'
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
        <div className='about-me'>
          <img src="./gabrielle.png" alt="" />
          <div>
            <h1>SOBRE MIM</h1>
            <p>Sou fotógrafa de Esteio, no Rio Grande do Sul. Trabalho com fotografia de eventos, ensaios e retratos, sempre buscando registrar momentos com leveza, afeto e autenticidade. Acredito que cada imagem carrega uma história e o meu olhar é voltado para transformar essas histórias em memórias cheias de significado :)</p>
          </div>
        </div>
      </main>

      <section className='hero-section'>
        <div className='images'>
          <img src="./fotoElton.png" alt="" />
          <img src="./Frame-1.png" alt="" />
          <img src="./foto-2.png" alt="" />
        </div>
      </section>

      <section className='ensaios-section'>
        <div className='ensaio'>
          <img src="./GiovanaEFernando.png" alt="" />
          <div>
            <p className='title'>Giovana & Fernando</p>
            <p className='description'>Ensaio de Casal</p>
          </div>
        </div>

        <div className='ensaio-aniversario'>
          <img src="./aniversarioLuiza.png" alt="" />
          <div>
            <p className='title'>Aniversário Luiza</p>
            <p className='description'>Ensaio de Casal</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default App
