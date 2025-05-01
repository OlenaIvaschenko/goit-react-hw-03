import { useEffect, useState } from "react";
import "../components/App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

const App = () => {
  const [marks, setMarks] = useState(() => {
    const dataFromLS = localStorage.getItem("savedData");
    if (dataFromLS !== null) {
      return JSON.parse(dataFromLS);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(marks));
  }, [marks]);

  const totalFeedback = marks.good + marks.neutral + marks.bad;
  const positiveFeedback = Math.round((marks.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setMarks({ ...marks, [feedbackType]: marks[feedbackType] + 1 });
  };

  const setEmptyMarks=()=>{
    setMarks({good: 0,neutral: 0,bad: 0});
  }

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        setEmptyMarks={setEmptyMarks}
      />
      {totalFeedback ? (
        <Feedback marks={marks} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
