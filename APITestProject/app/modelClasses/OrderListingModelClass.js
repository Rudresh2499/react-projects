class OrderListingModelClass {
    address_line_1: String;
    address_line_2: String;
    city: String;
    contact_number: String;
    item: {
        f1: Number;
        f2: String;
        f3: String;
        f4: String;
        f5: String;
        f6: String;
    }
    order_date: String;
    order_id: String;
    pincode: String;
    state: String;

    constructor(address_line_1, address_line_2, city, contact_number, item, order_date, order_id, pincode, state){
        this.address_line_1 = address_line_1;
        this.address_line_2 = address_line_2;
        this.city = city;
        this.contact_number = contact_number;
        this.item = item;
        this.order_date = order_date;
        this.order_id = order_id;
        this.pincode = pincode;
        
    }
}

export default OrderListingModelClass;