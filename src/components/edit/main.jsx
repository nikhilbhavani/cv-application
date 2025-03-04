import "../../css/editor.css";

// import { EducationInfo } from "./education/education_info";
// import { ExperienceInfo } from "./experience/experience_info";
import { Box } from "./box";

import { ResetBox } from "./ResetBox";
import { Personal } from "./Personal";

function Editor({ setter, state }) {
  return (
    <div className="editorContent">
      <ResetBox />
      <Personal setter={setter} state={state} />
      {/* <EducationInfo />
      <ExperienceInfo /> */}
      <Box type="education" />
      <Box type="experience" />
    </div>
  );
}

export { Editor };