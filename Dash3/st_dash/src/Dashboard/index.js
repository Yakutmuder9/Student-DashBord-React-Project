import "./Dash.css";
import SideNav from "./component/SideNav/SideNav";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";


function Dashboard() {
  return (
    <div className="Dash d-flex">
      <SideNav />
      <div className="side_main">
        <Header />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;