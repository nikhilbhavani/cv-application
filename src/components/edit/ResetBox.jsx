import { useContext } from "react";
import { PersonalInfo } from "../context";

function ResetBox() {
  const [state, setState] = useContext(PersonalInfo);

  function handleResetBtn() {
    setState({
      ...state,
      personalForm: {
        fullname: "",
        email: "",
        phone: "",
        adress: "",
      },
      educationForm: {
        startDate: "",
        endDate: "",
        school: "",
        degree: "",
        adress: "",
        show: true,
        key: 0,
      },
      experienceForm: {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description:
          "",
        show: true,
        key: 0,
      },
      education: [],
      experience: [],
      educationFormState: 0,
      ExperienceFormState: 0,
    });
  }

  function handleLoadBtn() {
    setState({
      ...state, 
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
  }

  return (
    <div className="resetBox box">
      <button className="resetBtn" onClick={handleResetBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
        Clear resume
      </button>
      <button className="loadBtn" onClick={handleLoadBtn}>
        Load example
      </button>
    </div>
  );
}

export { ResetBox };