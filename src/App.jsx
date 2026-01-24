import './App.css'
import Header from './components/Header'
import star from './assets/img/star.svg';
import { ReactLenis, useLenis } from 'lenis/react'


function App() {
  const lenis = useLenis((lenis) => {
    // console.log(lenis)
  })

  return (
    <>
      <ReactLenis
        root
        options={{
          duration: 1.2,
          smoothWheel: true,
          // smoothTouch: false // Desativa smooth scroll no mobile se necessário
        }}
      />
      <Header />
      <main className='container'>
        <div className='about-container'>
          <div className='about'>
            <div>
              <h1>Oie :)</h1>
              <p>Sou fotógrafa de Esteio, no Rio Grande do Sul. Trabalho com fotografia de eventos, ensaios e retratos, sempre buscando registrar momentos com leveza, afeto e autenticidade. Acredito que cada imagem carrega uma história e o meu olhar é voltado para transformar essas histórias em memórias cheias de significado.</p>
            </div>
            <img src="./gabrielle.png" alt="" />
          </div>
        </div>
      </main>
      <section className='ensaios-section'>
        <div className='ensaio'>
          <div className='img-after'>
            <img src="./belo.jpg" alt="" />
          </div>
          <div className='ensaio-desc'>
            <p className='title'>Festival Feijoada com Samba</p>
            <img className='star' src={star} alt="" />
            <p className='description'>Eventos e Festivais</p>
          </div>
        </div>


        <div className='ensaio'>
          <div className='img-after duda'>
            <img src="./duda.jpg" alt="" />
          </div>
          <div className='ensaio-desc'>
            <p className='title'>Eduarda Bolzan</p>
            <img className='star' src={star} alt="" />
            <p className='description'>Ensaio pessoal</p>
          </div>
        </div>

        <div className='ensaio'>
          <div className='img-after'>
            <img src="./festivalCinema.JPG" alt="" />
          </div>
          <div className='ensaio-desc'>
            <p className='title'>52º Festival de Cinema de Gramado</p>
            <img className='star' src={star} alt="" />
            <p className='description'>Cobertura de Eventos</p>
          </div>
        </div>

        <div className='ensaio'>
          <div className='img-after'>
            <img src="./aniversarioLuiza.jpg" alt="" />
          </div>
          <div className='ensaio-desc'>
            <p className='title'>20 Anos da Luiza</p>
            <img className='star' src={star} alt="" />
            <p className='description'>Aniversário</p>
          </div>
        </div>

        <div className='ensaio'>
          <div className='img-after'>
            <img src="./GiovanaEFernando.jpg" alt="" />
          </div>
          <div className='ensaio-desc'>
            <p className='title'>Giovana & Fernando</p>
            <img className='star' src={star} alt="" />
            <p className='description'>Ensaio de casal</p>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='contato-item'>
          <img src="./whats.svg" alt="" />
          <a href='/'>Vamos conversar</a>
        </div>
        <div className='contato-item'>
          <img src="./insta.svg" alt="" />
          <a href='https://www.instagram.com/gabiozzzz?igsh=MWhqYWw5bzRwaG5jeQ%3D%3D&utm_source=qr' className='insta'>Me siga</a>
        </div>
        <div className='contato-item'>
          <img src="./gmail.svg" alt="" />
          <a href='' className='insta'>gabriellepratinho@gmail.com</a>
        </div>
        <div className='contato-item'>
          <img src="./linkedin.svg" alt="" />
          <a href='' className='insta'>Sobre mim</a>
        </div>
      </section>

      <footer>João Fuzer 2026</footer>
    </>
  )
}

export default App
