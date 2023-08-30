import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
      <div data-aos="fade-right" className={'mainpage'}>
        <div className="container">
          <div className="main__title-container">
            <h1 className="main__title">Горячие новости</h1>
          </div>
          <div className="article__container">
            <ul className="article__main-list">
              <li className="article__item">
                <a href="/shark" target="_blank" rel="noopener noreferrer" className="image__link">
                  <img className={'image'} src="/public/images/akula.jpg" alt=""/>
                </a>
              </li>
              <li className="article__item">
                <div className="article__info-container">
                  <p className="top__news">Top News</p>
                  <div className="article__info">
                    <p className="article__info-text">59432 просмотров</p>
                    <p className="article__info-text">·</p>
                    <p className="article__info-text">2ч назад</p>
                  </div>
                </div>
              </li>
              <li className="article__item">
                <h2 className="article__title">
                  Голову и руки достали из желудка: жуткие подробности трагедии с акулой-людоедом в Египте
                </h2>
              </li>
            </ul>
            <ul className="article__list">
              <li className="article__item">
                <div className="article__second-container">
                  <a href="/Volochkova" target="_blank" rel="noopener noreferrer">
                    <img className={'image-second'} src="/images/volok.jpg" alt=""/>
                  </a>
                  <div className="article__second-info">
                    <div className="article__second-info-container1">
                      <p className="top__news">Top News</p>
                      <p className="article__second-title">"Еле на ногах держится, чуть со сцены не покатилась": Волочкова крупно опозорилась</p>
                    </div>
                    <div className="article__second-info-container2">
                      <p className="article__info-text">39347 просмотров</p>
                      <p className="article__info-text">·</p>
                      <p className="article__info-text">5ч назад</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="article__item">
                <div className="article__second-container">
                  <a href="/Gubka" target="_blank" rel="noopener noreferrer">
                    <img className={'image-second'} src="/images/gubka.jpg" alt=""/>
                  </a>
                  <div className="article__second-info">
                    <div className="article__second-info-container1">
                      <p className="top__news">Top News</p>
                      <p className="article__second-title">Зачем нужно обязательно обрезать уголок у посудной губки</p>
                    </div>
                    <div className="article__second-info-container2">
                      <p className="article__info-text">25115 просмотров</p>
                      <p className="article__info-text">·</p>
                      <p className="article__info-text">4ч назад</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="article__item">
                <div className="article__second-container">
                  <a href="/Mask" target="_blank" rel="noopener noreferrer">
                    <img className={'image-second'} src="/images/maska.jpg" alt=""/>
                  </a>
                  <div className="article__second-info">
                    <div className="article__second-info-container1">
                      <p className="top__news">Top News</p>
                      <p className="article__second-title">Косметологи подсказали, как омолодить кожу лица в домашних условиях</p>
                    </div>
                    <div className="article__second-info-container2">
                      <p className="article__info-text">18476 просмотров</p>
                      <p className="article__info-text">·</p>
                      <p className="article__info-text">7ч назад</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default MainPage;