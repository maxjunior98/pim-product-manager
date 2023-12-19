class Product {
    constructor() {
        this.structure = {
            table: 'PRODUCT',
            columns: ['TITLE','DESCRIPTION','PRICE','STORE_CODE'],
            key:'PID'
        }
    }

    getColumns() {
        return '(TITLE, DESCRIPTION, PRICE, STORE_CODE)'
    }
}