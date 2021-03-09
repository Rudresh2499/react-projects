class RegisterModel {
    first_name: String;
    last_name: String;
    email: String;
    password: String;
    mobile_number: String;

    constructor(first_name, last_name, email, password, mobile_number){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.mobile_number = mobile_number;
    }
}

export default RegisterModel;