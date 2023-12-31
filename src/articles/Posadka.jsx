import {useState} from "react";
import Footer from "../components/Footer.jsx";

const Posadka = () => {
  const [score, setScore] = useState(4622)
  const [liked, setLiked] = useState(false);

  const click = () => {
    if (!liked) {
      setScore(score + 1);
      setLiked(true);
    }
  };

  const fillColor = liked ? '#FF3F3F' : 'none';

  return (
    <>
      <div className={'oneArticle'}>
        <div className="container">
            <div>
                <ul className="logo__list stat"><li className="logo__item"><a href="/" className="logo__link"><h1 className="header__title mb">News Beat</h1></a></li><li className="logo__item"></li></ul>
            </div>
          <div className="oneArticle__img-container">
            <img className={'oneArticle__img'} src="/images/tomatos.jpg" alt=""/>
          </div>
          <div className="oneArticle__container">
            <div className="oneArticle__state-container">
              <div className="oneArticle__category">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 44 44" fill="none">
                  <path d="M20.1667 38.5H38.5" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.9549 8.84358C28.4451 6.64367 24.6108 6.87392 22.389 9.35913C22.389 9.35913 11.3462 21.7101 7.517 25.9972C3.68271 30.2819 6.49334 36.201 6.49334 36.201C6.49334 36.201 12.8223 38.1856 16.5985 33.961C20.3771 29.7363 31.4756 17.3253 31.4756 17.3253C33.6974 14.8401 33.4624 11.0435 30.9549 8.84358Z" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.9941 13.3693L27.3634 20.6783" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="oneArticle__category-name">
                  TopNews
                </p>
              </div>
              <div className="oneArticle__score-category">
                <button onClick={click} className="oneArticle__score-btn">
                  <svg className="like-svg" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 44 44" fill={fillColor}>
                    <path d="M20.3808 6.7152C21.0701 5.41736 22.9299 5.41736 23.6192 6.7152L27.2052 13.4671C27.4701 13.966 27.9505 14.3149 28.5069 14.4128L36.0364 15.7369C37.4838 15.9914 38.0584 17.76 37.037 18.8166L31.7238 24.3137C31.3311 24.7198 31.1478 25.2844 31.2266 25.8438L32.2942 33.414C32.4993 34.8691 30.9947 35.9621 29.6743 35.3173L22.8045 31.9629C22.2968 31.7148 21.7032 31.7148 21.1955 31.9629L14.3257 35.3173C13.0052 35.9621 11.5007 34.8691 11.7059 33.414L12.7734 25.8438C12.8523 25.2844 12.6688 24.7198 12.2762 24.3137L6.96295 18.8166C5.94163 17.76 6.51631 15.9914 7.96364 15.7369L15.4932 14.4128C16.0496 14.3149 16.5298 13.966 16.7948 13.4671L20.3808 6.7152Z" stroke="#1B1B1B" stroke-width="1.5"/>
                  </svg>
                </button>
                <p className="oneArticle__category-score">
                  {score}
                </p>
              </div>
            </div>
            <div className="oneArticle__text-container">
              <h1 className="oneArticle__title">
                  Секретный способ посадки и полива помидоров 🤫🌿🍅
                  Урожай гарантирован! 💥
              </h1>
              <p className="oneArticle__text">
                  🌱Посадка помидоров квадратно-гнездовым способом
                  Главный же секрет опытных огородников заключается в необычной посадке помидоров. Растения высаживаются по углам воображаемого квадрата, в центре которого располагается поливная яма. На одну яму приходится четыре куста помидоров.<br/>
                <br/>
                  🌱Как сделать поливную яму для помидоров
                  Просто выкопать яму недостаточно для того, чтобы обеспечить себе рекордный урожай томатов. На дно каждой ямы высыпают 1 л золы, а сверху плотно заполняют скошенной травой. Травы можно насыпать даже с горкой, она осядет по мере перегнивания. Но внимательно следите за тем, чтобы стебли были без семян и частей корневища.<br/>
                <br/>
                  ☝Если древесной золы у вас нет, используйте суперфосфат и сульфат калия – горсть каждого удобрения, внесенная в яму, обеспечит томаты всем необходимым.<br/>
                <br/>
                  💧Полив и подкормка помидоров одновременно
                  ✅В поливную яму следует наливать воду для полива помидоров. Такой полив гораздо полезнее поверхностного. При нем влага поступает сразу к корням, не испаряясь и не попадая на листья. А ведь именно в капельках воды<br/>
                <br/>
                  развиваются споры фитофтороза! Кроме того, объем ямы позволяет "напоить" растения на несколько дней вперед. Кусту томатов требуется до 2 л воды в сутки – дать ему столько путем обычного полива невозможно.<br/>
                  ✅Наполнение ямы также играет огромную роль в развитии помидоров. Перегнивающая трава и внесенная зола – отличная подкормка для кустов, а выделяемое при гниении тепло обогревает корни и защищает их от негативного влияния перепадов температуры. Кроме того, слой травы не дает воде быстро испаряться, а значит, томаты еще некоторое время смогут поглощать воду из почвы.<br/>
                  ✅Поливную яму можно использовать для дополнительных корневых подкормок. Томаты с благодарностью отзываются на внесение калия или микроэлементов.<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Posadka;