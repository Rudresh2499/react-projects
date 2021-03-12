class ListingParameterModel{
    perPageSize: Number;
    pageNumber: Number;
    category_id: Number;

    constructor(perPageSize, pageNumber, category_id){
        this.perPageSize = perPageSize;
        this.pageNumber = pageNumber;
        this.category_id = category_id;
    }
}

export default ListingParameterModel;