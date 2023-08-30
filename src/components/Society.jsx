
const Society = () => {
  return (
    <div id={'Society'} className={'Society'}>
      <div className="container">
        <h1 className="main__title">Общество</h1>
        <div className="new__articles-container">
          <div className="society__container">
            <ul className="society__list">
              <li className="society__item">
                <a href="/ChillSea" target="_blank" rel="noopener noreferrer">
                  <img className={'society__img'} src="/images/more.jpg" alt=""/>
                </a>
                <h2 className="society__title">Всех, кто собирается на отдых на Черное море, строго предупредили: важное заявление ученых</h2>
                <div className="article__info">
                  <p className="article__info-text">12235 просмотров</p>
                  <p className="article__info-text">·</p>
                  <p className="article__info-text">10ч назад</p>
                </div>
              </li>
              <li className="society__item">
                <a href="/Germany" target="_blank" rel="noopener noreferrer">
                  <img className={'society__img'} src="/images/germany.jpg" alt=""/>
                </a>
                <h2 className="society__title">Россиянка поехала в Германию и описала дома немцев одной фразой «нам такое не видать»</h2>
                <div className="article__info">
                  <p className="article__info-text">6445 просмотров</p>
                  <p className="article__info-text">·</p>
                  <p className="article__info-text">15ч назад</p>
                </div>
              </li>
              <li className="society__item">
                <a href="/Pensionery" target="_blank" rel="noopener noreferrer">
                  <img className={'society__img'} src="/images/pensiya.jpg" alt=""/>
                </a>
                <h2 className="society__title">Всем пенсионерам дадут внушительную надбавку за советский стаж</h2>
                <div className="article__info">
                  <p className="article__info-text">1445 просмотров</p>
                  <p className="article__info-text">·</p>
                  <p className="article__info-text">1ч назад</p>
                </div>
              </li>
              <li className="society__item">
                <h1 className="society__name">
                  Beat
                </h1>
              </li>
            </ul>

            <ul className="society__list-left">
              <li className="society__item">
                <h1 className="society__name">
                  News
                </h1>
              </li>
              <li className="society__item">
                <a href="/School" target="_blank" rel="noopener noreferrer">
                  <img className={'society__img'} src="/images/school.webp" alt=""/>
                </a>
                <h2 className="society__title">Важная новость: учебный год для школьников сократят, правило вступает в силу с 1 сентября</h2>
                <div className="article__info">
                  <p className="article__info-text">8537 просмотров</p>
                  <p className="article__info-text">·</p>
                  <p className="article__info-text">8ч назад</p>
                </div>
              </li>
              <li className="society__item-container">
                <li className="society__item">
                  <a href="/Vznosy" target="_blank" rel="noopener noreferrer">
                    <img className={'society__img'} src="/images/vznos.webp" alt=""/>
                  </a>
                  <h2 className="society__title">В России отменяют взносы за капремонт: стало известно, кто будет освобожден</h2>
                  <div className="article__info">
                    <p className="article__info-text">4845 просмотров</p>
                    <p className="article__info-text">·</p>
                    <p className="article__info-text">5ч назад</p>
                  </div>
                </li>
                <li className="society__item">
                  <a href="/blockPensi" target="_blank" rel="noopener noreferrer">
                    <img className={'society__img'} src="/images/pensionery.webp" alt=""/>
                  </a>
                  <h2 className="society__title">Решение принято, теперь так делать нельзя: новый запрет для пенсионеров вступает в силу</h2>
                  <div className="article__info">
                    <p className="article__info-text">7335 просмотров</p>
                    <p className="article__info-text">·</p>
                    <p className="article__info-text">7ч назад</p>
                  </div>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Society;