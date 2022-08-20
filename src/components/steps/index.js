import { useEffect, useState } from "react";
import Header from "../header";
import Loading from "../loading";
import Default from "./default";
import Education from "./education";
import Experience from "./experience";
import Profile from "./profile";
import Skill from "./skills";

const Step = (props) => {
  const [step, setstep] = useState(0);

  const nextstep = () => {
    setstep(step + 1);
      props.setcompleted(valid + 1);
  };

  const initialState = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    profession: "",
    portfolio: "",
    skill: [],
    experience: [],
    education: []
  };

  const [values, setvalues] = useState(initialState);
  const [error, seterror] = useState("");
  const [valid, setvalid] = useState(0);

  useEffect(() => {
    console.log(values);
    validateInput();
  }, [values]);

  const validateInput = () => {
    seterror("");
    setvalid(0);
    if (values.firstname === "") {
      return;
    }
    if (values.firstname.length < 3) {
      seterror("Enter a valid first name");
      return;
    }
    if (values.lastname.length < 3) {
      seterror("Enter a valid last name");
      return;
    }
    if (values.phone.length !== 11) {
      seterror("Enter a valid phone number");
      return;
    }
    const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    if (!emailRegex.test(values.email)) {
      seterror("Email is not valid");
      return;
    }
    if (values.profession === "") {
      seterror("Enter your profession");
      return;
    }
    if (values.portfolio === "") {
      seterror("Enter a link to your portfolio");
      return;
    }

    if (!isURL(values.portfolio)) {
      seterror("Enter a valid url to your portfolio");
      return;
    }

    setvalid(1);

    if (values.skill.length === 0) {
      seterror("");
      return;
    }
    if (values.skill.length < 3) {
      seterror("Minimum of 3 tags");
      return;
    }

    setvalid(2);

    if (values.experience.length === 0) {
      seterror("");
      return;
    }
    if (values.experience.length < 1) {
      seterror("Minimum of 1 experience");
      return;
    }

    setvalid(3);

    if (values.education.length === 0) {
      seterror("");
      return;
    }
    if (values.education.length < 1) {
      seterror("Minimum of 1 education");
      return;
    }

    setvalid(4);
  };

  const isURL = (string) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i');
    return pattern.test(string);
  }

  const previousstep = () => {
    setstep(step - 1);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const pushskill = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 2) {
        if (values.skill.length < 20) {
          setvalues({
            ...values,
            skill: [...values.skill, e.target.value],
          });
          e.target.value = "";
        } else {
          seterror("You can't have more than 20 skills");
        }
      } else {
        seterror("Tag is too small");
      }
    }
  };

  const pushexperience = (value) => {
    console.log(values);
    if (values.experience.length < 3) {
      setvalues({
        ...values,
        experience: [...values.experience, value],
      });
    } else {
      seterror("You can't have more than 3 experiences");
    }
  };

  const removeexperience = (i) => {
    if (i !== -1) {
      values.experience.splice(i, 1);
      setvalues({
        ...values,
        experience: values.experience.splice(0),
      });
    }
  };

  const pusheducation = (value) => {
    console.log(values);
    if (values.education.length < 3) {
      setvalues({
        ...values,
        education: [...values.education, value],
      });
    } else {
      seterror("You can't have more than 3 education");
    }
  };

  const removeeducation = (i) => {
    if (i !== -1) {
      values.education.splice(i, 1);
      setvalues({
        ...values,
        education: values.education.splice(0),
      });
    }
  };

  const removeskill = (i) => {
    if (i !== -1) {
      values.skill.splice(i, 1);
      setvalues({
        ...values,
        skill: values.skill.splice(0),
      });
    }
  };

  return (
    <div className="step">
      <Header />
      <div className="step-nav">
        {step == 0 && <Default nextstep={nextstep} setcompleted={props.setcompleted}/>}
        {step === 1 && (
          <Profile
            values={values}
            setvalues={setvalues}
            handlechange={handlechange}
          />
        )}
        {step === 2 && (
          <Skill
            skill={values.skill}
            pushskill={pushskill}
            removeskill={removeskill}
          />
        )}
        {step === 3 && <Experience setstep={setstep} pushexperience={pushexperience} removeexperience={removeexperience} experience={values.experience}/>}
        {step === 4 && <Education setstep={setstep} education={values.education} pusheducation={pusheducation} removeeducation={removeeducation}/>}
      </div>
      <p id="error">{error}</p>
      {step > 0 && step !== 5 && 
        <div className="step-button">
          {step > 1 && (
            <button onClick={previousstep}>
              <i class="fas fa-long-arrow-alt-left"></i>
              <p>Back</p>
            </button>
          )}
          <span />
          <button disabled={step > valid} onClick={nextstep}>
            <p>Continue</p>
            <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      }
      {step === 5 && <Loading/>}
    </div>
  );
};

export default Step;
