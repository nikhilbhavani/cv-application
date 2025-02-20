import { useContext } from "react";

import { PersonalInfo } from "../context";

function InputContent({name, id, type, placeholder, form}){
    const [state, setState]=useContext(PersonalInfo);

    function updateState(event){
        setState({
            ...state,
            [form]: {
              ...state[form],
              [id]: event.target.value,
            },
          });
    }

    return (
        <div className="inputContent">
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={state[form][id]}
        onChange={(e) => {
          updateState(e);
        }}
      />
    </div>
  );

}

export {InputContent};