class Store {
    constructor() {
        this.table = 'STORE'
        this.columns = ['NAME']
        this.key = 'CODE'
    }

    getColumns() {
        return '(NAME)'
    }
}