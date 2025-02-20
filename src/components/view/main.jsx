import "../../css/viewer.css";

import { Header } from "./header";
import { Education } from "./education";
import { Experience } from "./experience";

function Viewer() {
  return (
    <div className="viewerContent">
      <Header />
      <Education />
      <Experience />
      <div className="dummy"></div>
    </div>
  );
}

export { Viewer };