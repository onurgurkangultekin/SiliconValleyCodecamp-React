import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import withAuth from "./withAuth";

function Header({ loggedInUser, setLoggedInUser }) {
  const { theme } = useContext(ThemeContext);

  function LoggedIn({ loggedInUser, setLoggedInUser }) {
    return (
      <div>
        <span>Logged in as {loggedInUser}</span>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setLoggedInUser("");
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  function NotLoggedIn({ loggedInUser, setLoggedInUser }) {
    return (
      <div>
        <button
          className="btn btn-secondary"
          onClick={(e) => {
            e.preventDefault();
            const userName = window.prompt("enter login name:", "");
            setLoggedInUser(userName);
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCClogo.png" />
          </div>
          <div className="light">
            <h4 className="header-title">
              <div className={theme == "light" ? "text-dark" : "text-info"}>Silicon Valley CodeCamp</div>
            </h4>
          </div>
          <div className={theme === "light" ? "text-dark" : "text-info"}>
            {loggedInUser && loggedInUser.length > 0 ? (
              <LoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}></LoggedIn>
            ) : (
              <NotLoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}></NotLoggedIn>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Header);
