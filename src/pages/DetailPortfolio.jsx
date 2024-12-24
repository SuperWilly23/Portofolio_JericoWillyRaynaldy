import { useParams, Navigate } from "react-router-dom";
import { portfolioList } from '../data/DataPortfolio';
import '../styles/DetailPortfolio.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function DetailPortfolio() {
    const { id } = useParams();
    const data = portfolioList.find((item) => item.id == id);
    
    if (data == undefined) {
        return <Navigate to='/page-not-found' />;
    }

    return (
        <>
            <Navbar />
            <section id="detail-portfolio">
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.image} alt={data.title} />
                    <p className="skill"><b>Skills: </b>{data.skill}</p>
                    <button 
                        className="github-button"
                        onClick={() => window.open(data.link, "_blank")}
                    >
                        Lihat di GitHub
                    </button>
                </div>
            </section>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default DetailPortfolio;
