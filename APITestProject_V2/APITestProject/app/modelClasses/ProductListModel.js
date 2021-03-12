class  ProductListModel{
    part_id: String;
    part_title: String;
    part_price: String;
    part_number: String;
    part_overview: String;
    image_path: String;
    sub_category_id: Number;
    category_id: Number;
    sub_category_title: String;
    category_title: String;

    constructor(part_id, part_title, part_price, part_number, part_overview, image_path, sub_category_id, sub_category_title, category_title) {
        this.part_id = part_id;
        this.part_title = part_title;
        this.part_price = part_price;
        this.part_number = part_number;
        this.part_overview = part_overview;
        this.image_path = image_path;
        this.sub_category_id = sub_category_id;
        this.category_id = category_title;
        this.sub_category_title = sub_category_title;
        this.category_title = category_title;
    }
}

export default ProductListModel;
