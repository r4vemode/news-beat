
const Technic = () => {
  return (
    <div id="Technic" className={'Technic'}>
      <div className="container">
        <h1 className="main__title">
          Техника
        </h1>
        <div className="new__articles-container">
          <div className="technic__container">
            <ul className="technic__list">
              <li className="technic__item">
                <a href="/Pylisos" target="_blank" rel="noopener noreferrer">
                  <img className={'society__img'} src="/images/pilik.webp" alt=""/>
                </a>
                <h2 className="society__title">Станет в разы мощнее — сделайте это со своим старым пылесосом</h2>
                <div className="article__info">
                  <p className="article__info-text">12235 просмотров</p>
                  <p className="article__info-text">·</p>
                  <p className="article__info-text">10ч назад</p>
                </div>
              </li>
              <li className="technic__item">
                <a href="/Plane" target="_blank" rel="noopener noreferrer">
                  <img className={'society__img'} src="/images/samolet.jpg" alt=""/>
                </a>
                <h2 className="society__title">Топ 10 самых быстрых самолётов в мире на 2023 год</h2>
                <div className="article__info">
                  <p className="article__info-text">12235 просмотров</p>
                  <p className="article__info-text">·</p>
                  <p className="article__info-text">10ч назад</p>
                </div>
              </li>
              <li className="technic__item">
                <a href="/Phone" target="_blank" rel="noopener noreferrer">
                  <img className={'society__img'} src="/images/phone.jpg" alt=""/>
                </a>
                <h2 className="society__title">Кто изобрел телефон? В каком году он был придуман?</h2>
                <div className="article__info">
                  <p className="article__info-text">12235 просмотров</p>
                  <p className="article__info-text">·</p>
                  <p className="article__info-text">10ч назад</p>
                </div>
              </li>
              <li className="technic__item">
                <h1 className="society__name">
                  News
                </h1>
              </li>
            </ul>
            <ul className="technic__left-list">
              <li className="technic__item">
                <h1 className="society__name">
                  Beat
                </h1>
              </li>
            <li className="technic__item">
              <a href="/PhoneDanger" target="_blank" rel="noopener noreferrer">
                <img className={'society__img'} src="/images/phone-danger.jpg" alt=""/>
              </a>
              <h2 className="society__title">Чем опасен телефон? В чем обвиняют мобильную связь?</h2>
              <div className="article__info">
                <p className="article__info-text">12235 просмотров</p>
                <p className="article__info-text">·</p>
                <p className="article__info-text">10ч назад</p>
              </div>
            </li>
            <li className="technic__item">
              <a href="/SpeedCar" target="_blank" rel="noopener noreferrer">
                <img className={'society__img'} src="/images/speedst-car.jpg" alt=""/>
              </a>
              <h2 className="society__title">Какая самая быстрая машина в мире? Результаты испытаний.</h2>
              <div className="article__info">
                <p className="article__info-text">12235 просмотров</p>
                <p className="article__info-text">·</p>
                <p className="article__info-text">10ч назад</p>
              </div>
            </li>
            <li className="technic__item">
              <a href="/Spoiler" target="_blank" rel="noopener noreferrer">
                <img className={'society__img'} src="/images/spoiler.jpg" alt=""/>
              </a>
              <h2 className="society__title">Какой вид техники в детективах может быть спойлером?</h2>
              <div className="article__info">
                <p className="article__info-text">12235 просмотров</p>
                <p className="article__info-text">·</p>
                <p className="article__info-text">10ч назад</p>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technic;