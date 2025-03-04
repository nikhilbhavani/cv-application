import { useContext } from "react";
import { PersonalInfo } from "../context";

function List({ type }) {
  const [state, setState] = useContext(PersonalInfo);
  const listItems = state[type].map((item) => (
    <Item
      key={item.key}
      type={type}
      name={item.company || item.school}
      show={item.show}
      keyValue={item.key}
    />
  ));

  function changeStateToAddItem() {
    const form = `${type}Form`;
    const formState = `${type}FormState`;
    const lastKey = state[type].length > 0 ? state[type].at(-1).key + 1 : 0;
    setState({
      ...state,
      [formState]: 1,
      [form]: {
        ...state[form],
        key: lastKey + 1,
      },
    });
  }

  return (
    <div className="educationList">
      <ul>{listItems}</ul>
      <button onClick={changeStateToAddItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="22px"
          fill="#000000"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        {type}
      </button>
    </div>
  );
}

function Item({ keyValue, name, show, type }) {
  const [state, setState] = useContext(PersonalInfo);

  let iconClass;
  if (show) {
    iconClass = "visibleIcon";
  } else {
    iconClass = "hiddenIcon";
  }

  function changeVisibility() {
    let updatedList = state[type].map((item) => {
      if (item.key != keyValue) {
        return item;
      } else {
        return { ...item, show: !item.show };
      }
    });

    setState({
      ...state,
      [type]: updatedList,
    });
  }

  function changeItem() {
    const form = `${type}Form`;
    const formState = `${type}FormState`;
    setState({
      ...state,
      [form]: state[type].find((item) => {
        return item.key == keyValue;
      }),
      [formState]: 1,
    });
  }

  return (
    <li key={keyValue} className="educationItem">
      <p onClick={changeItem}>{name}</p>
      <span></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
        className={iconClass}
        onClick={changeVisibility}
      >
        <path />
      </svg>
    </li>
  );
}

export { List };