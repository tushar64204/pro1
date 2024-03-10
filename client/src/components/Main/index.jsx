import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); // Refresh the page after logout
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Welcome to Numericveda</h1>
        <div className={styles.navbar_buttons}>
          {/* Button with a Link component to navigate to a different route */}
          <Link to="/Form">
            <button>
              Book Free Class
            </button>
          </Link>
          <Link to="/Login">
            <button onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      </nav>

      {/* Sliding Banners Section */}
      {/* <div className={styles.banner_container}>
        <Link to="link1.html" className={`${styles.banner} ${styles.banner1}`}>
          <img src="image1.jpg" alt="Banner 1" />
        </Link>
        <Link to="link2.html" className={`${styles.banner} ${styles.banner2}`}>
          <img src="image2.jpg" alt="Banner 2" />
        </Link>
        <Link to="link3.html" className={`${styles.banner} ${styles.banner3}`}>
          <img src="image3.jpg" alt="Banner 3" />
        </Link>
        <Link to="link4.html" className={`${styles.banner} ${styles.banner4}`}>
          <img src="image4.jpg" alt="Banner 4" />
        </Link>
      </div>} */}
    </div> 
  );
};

export default Main;
