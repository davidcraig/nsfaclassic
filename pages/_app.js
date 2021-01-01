import '../styles/app.scss'
import Navbar from '../Components/Navbar'

const wowhead = (
  <script dangerouslySetInnerHTML={{
      __html: `
        var wowhead_tooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};
      `
    }} />,
  <script src="https://wow.zamimg.com/widgets/power.js"></script>
)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      {wowhead}
      <div className='container'>
        <div className='content'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
