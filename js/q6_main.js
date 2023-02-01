// get form
const registrationForm = document.getElementById("form-registration");
const passwordCheck = document.getElementById("pass_check");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInfo = {
    firstname: e.target.firstname,
    // middleName: e.target.middlename,
    lastname: e.target.lastname,
    course: e.target.course,
    // gender: e.target.gender,
    phoneCode: e.target.code,
    phoneNumber: e.target.phone,
    address: e.target.address,
    email: e.target.email,
    password: e.target.password,
    reTypePassword: e.target.retype_pass,
  };

  checkValidation(userInfo);
});

const setSuccess = (element) => {
  const parent = element.parentElement;
  const errorElement = parent.querySelector(".error");

  errorElement.innerHTML = "";
  errorElement.setAttribute("style", "display:none;");

  element.classList.add("valid-input");
  element.classList.remove("invalid-input");
};

const setError = (element, message) => {
  const parent = element.parentElement;
  const errorElement = parent.querySelector(".error");

  errorElement.innerHTML = message;
  errorElement.setAttribute("style", "display:block;");

  element.classList.add("invalid-input");
  element.classList.remove("valid-input");
};

const isValidEmale = (element) => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(element.value.trim());
};

const isValidPassword = (element) => {
  const pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return pattern.test(element.value);
};

const isPasswordMach = (reTypePassword, password) => {
  return reTypePassword === password;
};

function checkValidation(userObj) {
  for (const field in userObj) {
    if (field === "course" && userObj[field].value === "0") {
      setError(userObj[field], `${field} is requierd`);
    } else if (userObj[field].value.trim() === "") {
      setError(userObj[field], `${field} is requierd`);
    } else if (field === "email" && !isValidEmale(userObj[field])) {
      setError(userObj[field], `${field} is not valid`);
    } else if (field === "password" && !isValidPassword(userObj[field])) {
      setError(userObj[field], `${field} is not valid`);
    } else if (
      field === "reTypePassword" &&
      !isPasswordMach(userObj[field].value, userObj["password"].value)
    ) {
      setError(userObj[field], `${field} is not match with password`);
    } else {
      setSuccess(userObj[field]);
    }
  }
  console.log(userObj);
}

// passwordCheck.addEventListener("keyup",(e)=>{
//     if (!isPasswordMach(userObj[field], userObj["password"].value)) {
//         setError(userObj[field], `${field} is not valid`);
//       }
// });
