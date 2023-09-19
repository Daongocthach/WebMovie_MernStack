import AppBar from '../AppBar/AppBar'
import Footer from '../Footer/Footer'

function DefaultLayout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout