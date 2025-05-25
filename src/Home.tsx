import birthdayCard from "./assets/Blue Illustrative First Birthday Invitation.jpg";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <img src={birthdayCard} className={styles.card} />
      </div>
      <div className={styles.buttonRow}>
        <Link to="https://maps.app.goo.gl/MWxSsyxSFnQMhvyJ7">
          <button className="btn btn-primary">
            Location <i className="bi bi-geo-alt"></i>
          </button>
        </Link>
        <Link to="tel:+91 8095337176" >
          <button className="btn btn-primary  ${styles.buttonAnimation}" style={{position: 'relative', left:'40px', animationDelay: "0.9s"}}>Phone 1 <i className="bi bi-telephone"></i></button>
        </Link>
        <Link to="tel:+91 8660459580" >
          <button className="btn btn-primary  ${styles.buttonAnimation}" style={{position: 'relative', left:'77px', animationDelay: "0.9s"}}>Phone 2 <i className="bi bi-telephone"></i></button>
        </Link>
      </div>
    </>
  );
}

export default Home;
