import NavBar from "../components/NavBar";
import Products from "../components/Products";
import "./Landingpage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <NavBar />

      <div className="landing-content fade-in">
        <Products />
      </div>
    </div>
  );
};

export default LandingPage;
