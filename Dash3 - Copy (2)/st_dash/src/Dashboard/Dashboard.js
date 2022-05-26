import "./Dashboard.css";
import { Routes, Route } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import SideNav from "./component/SideNav/SideNav";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Activity from "./Pages/Activity/Activity";
import Course from "./Pages/Course_page/Course";
import Event from "./Pages/Event_page/Event";
import Inbox from "./Pages/Inbox_page/Inbox";
import Resources from "./Pages/Resource_page/Resources";
import Profile from "./Pages/Profile_page/Profile";
import Help from "./Pages/Help/Help";


const Dashboard = () => {
  // const [component, setComponent] = useState(
  //   {sideNavetogler.slice(0,1).toUpperCase() + sideNavetogler.slice(1, sideNavetogler.length)}
  // )
  let navigat = useNavigate();
  let {sideNavetogler} = useParams();

// function componentFirstletter(){
//   sideNavetogler.slice(0,1).toUpperCase() + sideNavetogler.slice(1, sideNavetogler.length)
//   console.log(sideNavetogler)
// }
  // const routes = [
  //   {
  //     path: "/",
  //     exact: true,
  //     main: () => <Activity />,
  //   },
  //   {
  //     path: "courses",
  //     main: () => <Course />,
  //   },
  //   {
  //     path: "event",
  //     main: () => <Event />,
  //   },
  //   {
  //     path: "inbox",
  //     main: () => <Inbox />,
  //   },
  //   {
  //     path: "resources",
  //     main: () => <Resources />,
  //   },
  //   {
  //     path: "profile",
  //     main: () => <Profile />,
  //   },
  //   {
  //     path: "help",
  //     main: () => <Help />,
  //   },
  // ];

  return (
    <div className="Dash d-flex">
      <div className="bg-dark d-none d-xl-block" id="LeftSide">
        <SideNav />
      </div>
      <div className="col ps-3 pe-3" id="rightSide">
        <Header />

        {/* --------Start the main dody component that rerendered in every routes --------*/}
        <div className="dhashboardConatainer w-100 h-100 bg-primary">
          <><Activity />
          {/* {(sideNavetogler.slice(0,1).toUpperCase() + sideNavetogler.slice(1, sideNavetogler.length)) ? <Activity/>:<Course />} */}
          </>
        </div>
        {/* --------End the main dody component that rerendered in every routes --------*/}

        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
