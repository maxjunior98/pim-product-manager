class Product {
    constructor() {
        this.structure = {
            table: 'PRODUCT',
            columns: ['PID','TITLE','DESCRIPTION','PRICE','STORE_CODE'],
            key:'PID'
        }
    }

    getColumns() {
        return this.structure.columns
    }
}