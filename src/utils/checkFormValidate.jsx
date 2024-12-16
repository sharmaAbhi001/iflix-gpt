
export const checkFormValidate = (email,password) =>{

    const isValidEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const isValidPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password)
  
    
    if(!isValidEmail) return "Enter a Valid Email"

    if(!isValidPassword)  return "Enter a Valid Password";

    return null

};