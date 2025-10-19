import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
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
          <img src="./Foto-2.png" alt="" />
        </div>
      </section>

      <section></section>
    </>
  )
}

export default App
