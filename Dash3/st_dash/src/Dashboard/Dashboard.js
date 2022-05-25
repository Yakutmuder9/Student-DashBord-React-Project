import "./Dashboard.css";
import SideNav from "./component/SideNav/SideNav";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";


function Dashboard() {
  return (
    <div className="Dash d-flex">
      
        <div className="bg-dark d-none d-xl-block" id="LeftSide">
          <SideNav/>
        </div>

        <div className="col bg-secondary" id="rightSide">
          <h1>Hey</h1>
        </div>

    
    

      {/* <div>
      <SideNav />
      </div>
      <div className="side_main bg-danger">
        <Header />
        <Footer />
      </div> */}
    </div>
  );
}

export default Dashboard;