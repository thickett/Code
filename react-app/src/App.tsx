import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button";
import Icon from "./components/Icon";
import button_styles from "./components/Button/Button.module.css";
import produce from "immer";


function App() {
  const [showAlert, setShowAlert] = useState(false);

  const [feedBack, setfeedBack] = useState({
    button_count: {
      likes: 0,
      dislikes: 0,
    },
  });

  const handleFeedBackClick = (buttonType: string) => {
    setfeedBack(
      produce(feedBack, (draft) => {
        if (buttonType === "like") {
          draft.button_count.likes++;
        } else if (buttonType === "dislike") {
          draft.button_count.dislikes++;
        }
      })
    );
  };

  return (
    <>
      {showAlert && (
        <div>
          <Alert
            onClose={() => setShowAlert(false)}
            allowClose={true}
            alertType="primary"
          >
            <div>
              <Button
                onClick={() =>
                  handleFeedBackClick("like")
                } /*like/dislikes will be reused around the site. these must be there own component. */
                className={[
                  button_styles.buttonTiny,
                  button_styles.buttonShadow,
                ].join(" ")}
              >
                <Icon name={"BsFillHandThumbsUpFill"} color="white"></Icon>
              </Button>
              <span>{feedBack.button_count.likes}</span>
            </div>

            <div>
              <Button
                onClick={() => handleFeedBackClick("dislike")}
                className={[
                  button_styles.buttonTiny,
                  button_styles.buttonShadow,
                ].join(" ")}
              >
                <Icon name={"BsFillHandThumbsDownFill"} color="white"></Icon>
              </Button>
              <span>{feedBack.button_count.dislikes}</span>
            </div>
          </Alert>
        </div>
      )}
      <Button onClick={() => setShowAlert(true)} colour="primary">
        <span>Feedback</span>
      </Button>
    </>
  );
}

export default App;
