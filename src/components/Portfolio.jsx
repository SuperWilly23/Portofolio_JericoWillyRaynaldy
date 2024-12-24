import { portfolioList } from '../data/DataPortfolio'
import { Link } from 'react-router-dom'
import "../styles/Portfolio.css"
function portfolio() {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3>Portfolio</h3>
        <div className="grid">
          {
            portfolioList.map((item)=>{
              return(
                <div className="item" key={item.id}>
                <Link to={`/portfolio/${item.id}`}><img src={item.image} />
                </Link>
                <p className="item-title">{item.title}</p>
              </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default portfolio