
const Footer = () => {
  return (
    <div data-aos="fade-up" className={'footer'}>
      <div className="container">
          <div className="">
            <h1 className="footer__title">News Beat</h1>
          </div>
        <div className="footer__list-container">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://sportkp.ru/" className="footer__link">
                sportkp.ru
              </a>
            </li>
            <li className="footer__item">
              <a href="https://teleprogramma.pro/" className="footer__link">
                teleprogramma.pro
              </a>
            </li>
            <li className="footer__item">
              <a href="https://hotnews.plus/" className="footer__link">
                Партнёры
              </a>
            </li>
          </ul>
        </div>
        </div>
    </div>
  );
};

export default Footer;