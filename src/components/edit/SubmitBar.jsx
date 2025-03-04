import { useContext } from "react";
import { PersonalInfo } from "../context";

function SubmitBar({ type }) {
  const [state, setState] = useContext(PersonalInfo);

  const form = `${type}Form`
  const formState = `${type}FormState`

  function changeStateToList() {
    setState({
      ...state,
      [formState]: 2,
      [form]: {
        startDate: "",
        endDate: "",
        company: "",
        position: "",
        location: "",
        description: "",
        address: "",
        school: "",
        degree: "",
        show: true,
        key: state[type].length > 0 ? state[type].at(-1).key + 1 : 0,
      },
    });
  }

  function removeItemFromState() {
    setState({
      ...state,
      [formState]: 2,
      [form]: {
        startDate: "",
        endDate: "",
        company: "",
        position: "",
        location: "",
        description: "",
        address: "",
        school: "",
        degree: "",
        show: true,
        key: state[type].length > 0 ? state[type].at(-1).key + 1 : 0,
      },
      [type]: state[type].filter(
        (item) => item.key !== state[form].key
      ),
    });
  }

  function addItemToState() {
    setState({
      ...state,
      [type]: [
        // delete old state
        ...state[type].filter(
          (item) => item.key !== state[form].key
        ),
        // append new state
        state[form],
      ],
      [form]: {
        startDate: "",
        endDate: "",
        company: "",
        position: "",
        location: "",
        description: "",
        address: "",
        school: "",
        degree: "",
        show: true,
        key: state[form].key + 1,
      },
      [formState]: 2,
    });
  }

  return (
    <div className="submitBar">
      <button onClick={removeItemFromState}>Delete</button>
      <span></span>
      <button onClick={changeStateToList}>Cancel</button>
      <button className="saveBtn" onClick={addItemToState}>
        Save
      </button>
    </div>
  );
}

export { SubmitBar };