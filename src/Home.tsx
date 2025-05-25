import birthdayCard from "./assets/Blue Illustrative First Birthday Invitation.jpg";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <img src={birthdayCard} className={styles.card} />
      </div>
      <div>
        <Link to="https://maps.app.goo.gl/MWxSsyxSFnQMhvyJ7">
          <button className="btn btn-primary">
            Location <i className="bi bi-geo-alt"></i>
          </button>
        </Link>
        <Link to="tel:+91 8095337176" >
          <button className="btn btn-primary" style={{position: 'relative', left:'55px'}}>Phone 1 <i className="bi bi-telephone"></i></button>
        </Link>
        <Link to="tel:+91 8660459580" >
          <button className="btn btn-primary" style={{position: 'relative', left:'95px'}}>Phone 2 <i className="bi bi-telephone"></i></button>
        </Link>
      </div>
    </>
  );
}

export default Home;
