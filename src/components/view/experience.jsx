import { useContext } from "react";
import { PersonalInfo } from "../context";
import { Content } from "./content";

function Experience() {
  const [state] = useContext(PersonalInfo);
  const visibleItems = state.experience.filter(item => item.show == true)
  const cvItems = visibleItems.map(form => {
    return (
      <Content
      startDate={form.startDate}
      endDate={form.endDate}
      adress={form.location}
      title={form.company}
      info={form.position}
      key={form.key}
      description={form.description}
    />
    )
  })

  return (
    <div className="viewerContainer">
      <h2>Profesional Experience</h2>
      <div>{cvItems}</div>
    </div>
  );
}

export { Experience };