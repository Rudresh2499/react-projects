class AddressModel {
    address_id: Number;
    address_line_1: String;
    address_line_2: String;
    city: String;
    state: String;
    pincode: String;
    contact_number: String;

    constructor(address_id, address_line_1, address_line_2, city, state, pincode, contact_number) {
        this.address_id = address_id;
        this.address_line_1 = address_line_1;
        this.address_line_2 = address_line_2;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.contact_number = contact_number;
    }
}

export default AddressModel;