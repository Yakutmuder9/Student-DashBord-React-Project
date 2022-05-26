import Bird from "../../../app/assets/images/bird.png";
import webapp from "../../../app/assets/images/webapp.png";
import "./Sidenav.css";

const SideNav = () => {
  return (
      <>
        <div className="col shadow " id="DashboardLogo">
          <img className=" " id="logo_bird" src={Bird} />
          <h1 className="pt-5 pb-4 ps-5 mt-4 bolder">Dashboard</h1>
          <hr className="horizontal bg-secondary p-1 mt-1" />
        </div>

        <div className="col" id="SideNavList">
          <div
            className="navbar-collapse ps-4 text-secondary w-auto"
            id="sidenav-collapse-main"
          >
            <ul className="nav nav-tabs d-block" id="myTab" role="tablist">

              <li className="nav-item">
                <a className="nav-link d-flex active bg-danger" href="index.html">
                  <div className="">
                    <i className="material-icons">dashboard</i>
                  </div>
                  <span className="nav-link-text ms-1">&nbsp;Dashboard</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link d-flex" href="course.html">
                  <div className="">
                    <span className="material-icons">bookmark</span>
                  </div>
                  <span className="nav-link-text ms-1">&nbsp;Course</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex" href="event.html">
                  <div className="">
                    <span className="material-icons">event</span>
                  </div>
                  <span className="nav-link-text ms-1" id="#navlikn_text">
                    &nbsp;Event
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex" href="inbox.html">
                  <div className="">
                    <span className="material-icons">move_to_inbox</span>
                  </div>
                  <span className="nav-link-text ms-1">&nbsp;Inbox</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex" href="resource.html">
                  <div className="">
                    <span className="material-icons">library_books</span>
                  </div>
                  <span className="nav-link-text ms-1">&nbsp;Resources</span>
                </a>
              </li>
              <li className="nav-item mt-3">
                <h4 className="ps-2 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                  Account Detailss
                </h4>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex" href="profile.html">
                  <div className="">
                    <span className="material-icons">account_circle</span>
                  </div>
                  <span className="nav-link-text ms-1">&nbsp;Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex" href="signin.html">
                  <div className="">
                    <span className="material-icons">login</span>
                  </div>
                  <span className="nav-link-text ms-1">&nbsp;Sign In</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex" href="help.html">
                  <div className="">
                    <span className="material-icons">help</span>
                  </div>
                  <span className="nav-link-text ms-1">&nbsp;Help</span>
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div className="sidenav-footer
        pt-3">
          <div className="card mt-2 " id="sidenavCard">
            <div className="card-body text-start p-3 w-100">
              <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
                <i
                  className="ni ni-diamond text-dark text-gradient text-lg top-0"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="docs-info">
                <h6 className="text-white up mb-0">Need help?</h6>
                <p className="text-xs font-weight-bold text-secondary">
                  Please check our docs
                </p>
                <img src={webapp} />
                <a
                  href=""
                  className="btn btn-white btn-outline-primary btn-sm w-100 text-white mb-0"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
          <button className="btn btn-primary w-100 mt-3 mb-3 p-3">Colapse</button>
        </div>
        

        
    </>
  );
};

export default SideNav;
