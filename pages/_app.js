import { Navbar, Brand } from '@davidcraig/react-bulma'
import '../styles/globals.css'
import '../styles/app.scss'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar>
        <Brand title='Not Safe for Azeroth' />
      </Navbar>
      <div className='container'>
        <div className='content'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
