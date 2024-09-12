import "./App.css";
function App() {
  return (
    <div className="container">
      <nav>
      <div className="logo_container">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16" fill="none">
       <path d="M9 7L10 0H8L2 7V9H7L6 16H8L14 9L14 7H9Z" fill="#000000"/>
      </svg>

        </div>
        
        <div className="menu_container">
        <ul>
          <li>
            <a href="www.ziontutorial.com" className="active">Products</a>
          </li>
          <li>
            <a href="www.ziontutorial.com">Solution</a>
          </li>
          <li>
            <a href="www.ziontutorial.com"> Pricing</a>
          </li>
          <li>
            <a href="www.ziontutorial.com"> Contact</a>
          </li>
        </ul>
        </div>
        
        <div className="btn_container">        
        <button className="btn">
         Log In
        </button>     
        </div>      
      </nav>

      {/* hero section */}
      <div className="content">
        <div class="hero-text">
        <p className="content_para">Trusted by over 2800+ companies</p>
        <h1>Find Your <span className="content_span">Remote Job</span></h1>
        <h1>Easy And Fast.</h1>
        <p className="content_alice">A Platform where you can get your desired job without any hasse</p>
        <form>
          <input type="text" placeholder="Your Email Address" />
          <button type="submit" className="btn_sec">
            Submit
          </button>
        </form>
      </div>
      </div>
      <p></p>
    </div>
  );
}
 
export default App;