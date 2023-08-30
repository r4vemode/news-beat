import ArticlesSearch from "./search.jsx";
import NavBar from "./navbar.jsx";

const Header = () => {
  return (
      <div>
        <header>
          <div data-aos="fade-down" className="container">
            <ul className="logo__list">
              <li className="logo__item">
                <a href="" className="logo__link">
                  <h1 className="header__title">
                    News Beat
                  </h1>
                </a>
              </li>
              <li className="logo__item">


              </li>
            </ul>
              <div className="flex">
                  <NavBar/>
                  <ArticlesSearch />

              </div>

          </div>
        </header>
      </div>
  );
};

export default Header;