class BuiderModel {
    constructor(table, columns, columnsStr, key) {
        this.table = table
        this.columns = columns
        this.columnsStr = columnsStr
        this.key = key
    }

    getColumns() {
        return this.columnsStr
    }

    getSizeColumns() {
        let str = ''
        for (let i = 0; i < this.columns.length(); i++) {
            if(i === this.columns.length() - 1){
                str = str + `$${i + 1}`
            }
            else {
                str = str + `$${i + 1}` + ','
            }
        }
    }

    getQuery() {
        const query = ``
    }
}