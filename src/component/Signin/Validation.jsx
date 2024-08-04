const Validation = (form) => {
    let errors = {};
    if (!form.username) {
      errors.username = "username Required";
    } 
    if (!form.password) {
      errors.password = "Password Required";
    } else if (
      !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(form.password) ||
      !/[A-Z]/.test(form.password) ||
      !/[a-z]/.test(form.password)
    ) {
      errors.password =
        " Password must contain atleast one uppercase,lowercase and one special character";
    } else if (form.password.length < 8) {
      errors.password = " Password must be atleast 8 characters";
    }
    // if(form.username !== form.password){
    //     errors.username = "Incorrect Username or password";
    // }
    return errors;
};
  
export default Validation;
  