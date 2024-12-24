import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function PageNotFound() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      <h2>Oooopsss.....</h2>
      <p>Wah, sepertinya halaman yang Anda cari tidak ada...........</p>
    </div>
    <Footer />
    </>
  )
}

export default PageNotFound