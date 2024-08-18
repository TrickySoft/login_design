import "./styles.css";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <form className="form" action="#">
          <input type="text" placeholder="Search..." />
          <button type="submit" className="btn">
            <i className="bx bx-search"></i>
          </button>
        </form>
      </header>
      <div className="background"></div>
      <div className="container">
        <div className="content">
          <h2 className="logo">
            <i className="bx bx-book-open"></i> TrickySoft
          </h2>
          <div className="site-text">
            <h2>
              Welcome! <br />
              <span>to our new Website</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur excepturi accusantium vero iure atque? Libero nemo vero
              unde itaque aliquid sint facere omnis atque alias quam sequi,
              eligendi dolores quibusdam.
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#">
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="login-register">
          <div className="login-box">
            <form action="#">
              <h2>Sign In</h2>
              <div className="input-box">
                <div className="icon">
                  <i class="bx bxs-envelope"></i>
                </div>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <div className="icon">
                  <i className="bx bx-lock"></i>
                </div>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="forgot-password">
                <label>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit">Login</button>
              <div className="signup-link">
                <span>Don't have an account? </span>
                <a href="#"> Register</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
