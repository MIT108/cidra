import Validations from './Validations';

export default class addHospitalValidation {
    constructor(email, name, country, state, city , contact, matricule, description) {
        
        this.name = name
        this.country = country
        this.state = state
        this.city = city
        this.email = email
        this.contact = contact
        this.matricule = matricule
        this.description = description
    }

    checkValidations() {
        let errors = [];

        //name validations
        if (!Validations.checkField(this.name)) {
            errors['name'] = 'Name Field is required';
        }

        //country Validations
        if (!Validations.checkField(this.country)) {
            errors['country'] = "Country Field is required";
        }

        
        //state validations
        if (!Validations.checkField(this.state)) {
            errors['state'] = 'State Field is required';
        }
        
        //city Validations
        if (!Validations.checkField(this.city)) {
            errors['city'] = 'city field is required';
        }


        //email validations
        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'Invalid Email';
        }


        //contact Validations
        if (!Validations.minLength(this.contact, "9")) {
            errors['contact'] = 'contact should be of 9 characters';
        }

        
        //matricule validations
        if (!Validations.checkField(this.matricule)) {
            errors['matricule'] = 'Matricule Field is required';
        }

        //description Validations
        if (!Validations.minLength(this.description, "100")) {
            errors['description'] = 'description should be of 100 characters';
        }


        return errors;
    }

    static getErrorMessageFromCode(errorCode) {
        switch (errorCode) {
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            case 'EMAIL_NOT_FOUND':
                return 'Email Not Found';
            case 'INVALID_PASSWORD':
                return 'Invalid Password';
            default:
                return 'Unexpected error occurred. Please try again';
        }
    }
}
