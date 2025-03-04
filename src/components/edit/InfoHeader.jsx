import { useContext } from "react";
import { PersonalInfo } from "../context";

function InfoHeader({title, formState}) {
  const [state, setState] = useContext(PersonalInfo);
  let boxState = "closed";
  if (state[formState] == 1) {
    boxState = "open";
  } else if (state[formState] == 2) {
    boxState = "update";
  }

  function changeState() {
    if (state[formState] == 0) {
      setState({
        ...state,
        [formState]: 2,
      });
    } else {
      setState({
        ...state,
        [formState]: 0,
      });
    }
  }

  return (
    <div className={`headerBox ${boxState}`}>
      <h2>{title}</h2>
      <button className="displayBtn" onClick={changeState}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
        </svg>
      </button>
    </div>
  );
}

export { InfoHeader };