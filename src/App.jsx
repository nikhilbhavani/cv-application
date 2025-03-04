import "./App.css";
import { Viewer } from "./components/view/main";
import { Editor } from "./components/edit/main";

import { useState } from "react";
import { PersonalInfo } from "./components/context";

function App() {
  const [state, setState] = useState({
    personalForm: {
      fullname: "Nikhil Kumar Bhavani",
      email: "Nikhil Kumar Bhavani",
      phone: "+1 864 921 5441",
      address: "1064, Norfolk, VA 23508",
    },
    education: [
      {
        startDate: 2018,
        endDate: 2022,
        school: "Mahindra Ecole Centrale",
        degree: "Bachelor of Technology in Mechanical Engineering",
        address:
          "Hyderabad, Telangana, India",
        show: true,
        key: 0,
      },
      {
        startDate: 2022,
        endDate: 2024,
        school: "Old Dominion University",
        degree: "Masters of Science, Computer Science",
        address:
          "Norfolk, VA",
        show: false,
        key: 1,
      },
    ],
    experience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi praesentium eius eveniet, veritatis omnis ducimus molestias, esse quam recusandae hic dolore, qui maxime consequatur repellat nesciunt earum eum? Maxime, esse!",
        show: true,
        key: 0,
      },
    ],
    educationFormState: 0,
    experienceFormState: 0,
  });

  return (
    <PersonalInfo.Provider value={[state, setState]}>
      <div className="container">
        <Editor />
        <Viewer />
      </div>
    </PersonalInfo.Provider>
  );
}

export default App;
