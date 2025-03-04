import { SubmitBar } from "./SubmitBar";
import { InputContent } from "./InputContent";

function EducationForm() {
  return (
    <div className="educationForm">
      <InputContent
        name="School"
        id="school"
        type="text"
        placeholder="My University"
        form="educationForm"
      />
      <InputContent
        name="Degree"
        id="degree"
        type="text"
        placeholder="My Career"
        form="educationForm"
      />

      <div className="flex">
        <InputContent
          name="Start date"
          type="text"
          id="startDate"
          placeholder="DD/MM/YYYY"
          form="educationForm"
        />
        <InputContent
          name="End date"
          type="text"
          id="endDate"
          placeholder="DD/MM/YYYY"
          form="educationForm"
        />
      </div>
      <InputContent
        name="location"
        type="text"
        id="address"
        placeholder="University adress, city"
        form="educationForm"
      />
      <SubmitBar type="education" />
    </div>
  );
}

function ExperienceForm() {
  return (
    <div className="educationForm">
      <InputContent
        name="Company"
        id="company"
        type="text"
        placeholder="My company"
        form="experienceForm"
      />
      <InputContent
        name="Position"
        id="position"
        type="text"
        placeholder="My Job"
        form="experienceForm"
      />

      <div className="flex">
        <InputContent
          name="Start date"
          type="text"
          id="startDate"
          placeholder="DD/MM/YYYY"
          form="experienceForm"
        />
        <InputContent
          name="End date"
          type="text"
          id="endDate"
          placeholder="DD/MM/YYYY"
          form="experienceForm"
        />
      </div>
      <InputContent
        name="Location"
        type="text"
        id="location"
        placeholder="Company adress, city"
        form="experienceForm"
      />
      <InputContent
        name="Description"
        type="text"
        id="description"
        placeholder="brief resume of your responsabilities"
        form="experienceForm"
      />
      <SubmitBar type="experience" />
    </div>
  );
}
export { EducationForm, ExperienceForm };