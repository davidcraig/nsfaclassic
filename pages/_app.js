import '../styles/app.scss'
import Navbar from '../Components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='content'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
