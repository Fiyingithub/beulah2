const Validation = (form) => {
  const ValidationError={}
  if (!form.username.trim()) {
    ValidationError.username = "Username Required";
  }  else if (form.username.length < 5) {
    ValidationError.password = " Username must be atleast 5 characters";
  }
  if (!form.password.trim()) {
    ValidationError.password = "Password Required";
  } 
   else if (form.password.length < 8) {
    ValidationError.password = " Password must be atleast 8 characters";
  }
 
  return ValidationError;
};

export default Validation;
