import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" alt="intros">
            intro
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>053-384-7572</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>coulsonweb0@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
