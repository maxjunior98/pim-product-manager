class Employee {
    constructor() {
        this.structure = {
            table: 'EMPLOYEE',
            columns: ['NAME','ROLE','PASSWORD','STORE_CODE'],
            key:'ID'
        }
    }

    getColumns() {
        return '(NAME, ROLE, PASSWORD, STORE_CODE)'
    }
}