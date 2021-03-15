class PartsParameterModelClass {
    part_id: Number;
    qty: Number;
    part_price: Number;

    constructor(part_id, qty ,part_price){
        this.part_id = part_id;
        this.qty = qty;
        this.part_price = part_price;
    }
}

class PlaceOrderParameterModelClass {
    address_id: String;
    parts: Array;

    constructor(address_id, parts) {
        this.address_id = address_id;
        this.parts = parts;
    }
}

export { PartsParameterModelClass, PlaceOrderParameterModelClass, };