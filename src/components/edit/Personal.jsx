import { InputContent } from "./InputContent";

function Personal(){
    return(
        <div className="personalBox box">
      <h2>Personal Details</h2>
      <form>
        <InputContent
          form="personalForm"
          name="Full Name"
          type="text"
          id="fullname"
          placeholder="John Doe"
        />
        <InputContent
          form="personalForm"
          name="Email"
          type="email"
          id="email"
          placeholder="example@domain.com"
        />
        <InputContent
          form="personalForm"
          name="Phone number"
          type="tel"
          id="phone"
          placeholder="+864********"
        />
        <InputContent
          form="personalForm"
          name="Adress"
          type="text"
          id="adress"
          placeholder="Norfolk VA 23508"
        />
      </form>
    </div>
    );
}

export {Personal}