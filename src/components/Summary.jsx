import "./Summary.css";
import  data  from "../data.json";

function Summary() {
    const range=100;
    const averageScore = Math.round( //evito decimales
        data.reduce((acc, item) => acc + item.score, 0) / data.length //tengo un acum de la suma de mis items
      );
  return (
    <>
      <main className="container">
        <section className="container__result">
          <h1 className="container__result__title">Your Result</h1>
          <div className="container__result__circle">
            <p className="container__result__circle__total">{averageScore}</p>
            <p className="container__result__circle__range">of {range}</p>
          </div>
          <h2 className="container__result__status"> Great</h2>
          <p className="container__result__text">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>
        <section className="container__summary">
          <h2 className="container__summary__title">Summary</h2>
          <div className="container__summary__list">
            <div className='list-task-content'>
                {
                    data.map((item)=>
                        <div className="container__summary__item" key={item.id}>
                    <div className="container__summary__item__content">
                      <img
                        className="container__summary__item__content__img" src={item.icon}
                        alt=""
                      />
                      <p className="container__summary__item__content__text">{item.category}</p>
                    </div>
                    <p className="container__summary__item__content__range">
                      <span className="container__summary__item__range--mark">
                        {item.score}
                      </span>
                      /{range}
                    </p>
                  </div>
                )}
         </div>
          </div>
          <button className="container__summary__button" type="submit">Continue</button>
        </section>
      </main>
    </>
  );
}

export default Summary;
