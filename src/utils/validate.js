export const checkValidData = (email, password , fullName) => {

    if (fullName != null && fullName.trim() !== "") {
        const isFullNameValid = /^([A-ZÀ-ÿ][a-zà-ÿ' -]+)(\s[A-ZÀ-ÿ][a-zà-ÿ' -]+)*$/.test(fullName);
        if (!isFullNameValid) return "Full name is not valid";
    }  
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;
}