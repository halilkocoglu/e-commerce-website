import "./productsPage.css"
import Header from "../../containers/header/Header"
import Footer from "../../containers/footer/Footer"
import SelectedCategory from "../../components/selectedCategory/SelectedCategory"
import "../homePage/home.css"

function ProductsPage() {
  return (
    <div className="home-container">
        <Header />
        <SelectedCategory/>
        <Footer/>
    </div>
  )
}

export default ProductsPage