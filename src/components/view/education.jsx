import { useContext } from "react";

import { PersonalInfo } from "../context";
import { Content } from "./content";

function Education(){
    const [state]=useContext(PersonalInfo);
    const visibleItems=state.education.filter(item=>item.show==true);
    const cvItems = visibleItems.map(form => {
        return (
          <Content
          startDate={form.startDate}
          endDate={form.endDate}
          adress={form.location}
          title={form.school}
          info={form.degree}
          key={form.key}
        />
        )
      })
    
      return (
        <div className="viewerContainer">
          <h2>Education</h2>
          <div>{cvItems}</div>
        </div>
      );
}

export {Education}