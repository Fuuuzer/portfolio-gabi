import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <main className='container'>
        <img src="./src/assets/img/gabrielle.png" alt="" />
        <div className='about-me'>
          <h1>SOBRE MIM</h1>
          <p>Sou fotógrafa de Esteio, no Rio Grande do Sul. Trabalho com fotografia de eventos, ensaios e retratos, sempre buscando registrar momentos com leveza, afeto e autenticidade.Acredito que cada imagem carrega uma história e o meu olhar é voltado para transformar essas histórias em memórias cheias de significado :)</p>
        </div>
      </main>

      <section className='hero-section'>
        <div className='images'>
          <img src="./src/assets/img/foto-1-.png" alt="" />
          <img src="./src/assets/img/foto-2.png" alt="" />
          <img src="./src/assets/img/foto-4.png" alt="" />
        </div>
      </section>
    </>
  )
}

export default App
