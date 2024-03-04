import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers}) {
      const skippedAnswers = userAnswers.filter(answer => answer === null);
      const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);
      const incorrectAnswers = userAnswers.filter((answer, index)=> answer !== QUESTIONS[index].answers[0]); 

      const skippedAnswersShear = Math.round((skippedAnswers.length / userAnswers.length) * 100);

      const correctAnswersShear = Math.round((correctAnswers.length / userAnswers.length) * 100);

      const incorrectAnswersShear = Math.round((incorrectAnswers.length / userAnswers.length) * 100);

  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="Tropy Icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShear} %</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShear} %</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectAnswersShear} %</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
            let cssClass = 'user-answer';

            if (answer === null) {
                  cssClass += ' skipped';
            } else if(answer === QUESTIONS[index].answers[0]) {
                  cssClass += ' correct';
            } else {
                  cssClass += ' wrong' 
            }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
              { cssClass !== 'user-answer correct' && <p className='user-answer correct'>{QUESTIONS[index].answers[0]}</p>}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
