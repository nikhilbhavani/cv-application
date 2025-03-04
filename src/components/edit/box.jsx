import { useContext } from "react";
import { PersonalInfo } from "../context";

import { InfoHeader } from "./InfoHeader";
import { ExperienceForm, EducationForm } from "./Form";

import { List } from "./list";

function Box({type}) {
    let content = null;
    const formState = `${type}FormState`
    // const cssClasses = `${type}Box box`

    const [state] = useContext(PersonalInfo);

    if (state[formState] == 1)  {
        if (type == "experience") {
            content = <ExperienceForm />
        } else if (type == "education") {
            content = <EducationForm />
        }
        
    } else if (state[formState] == 2) {
        content = <List type={type}/>
    }
    return (
        <div className="box">
            <InfoHeader title={type} formState={formState} />
            {content}
        </div>
    )
}

export { Box };