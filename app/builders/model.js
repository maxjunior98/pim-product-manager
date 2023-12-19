class BuiderModel {
    constructor(table, columns, columnsStr, key) {
        this.table = table
        this.columns = columns
        this.columnsStr = columnsStr
        this.key = key
    }

    constructTable() {
        let str = ''
        for (const e of this.columns) {
            str = str + `${e.name} ${e.type},`
        }
        str = str + `${this.key.name} ${this.key.type} PRIMARY KEY`
        console.log(str)
        return str
    }


    getColumns() {
        return this.columnsStr
    }

    getSizeColumns() {
        let str = ''
        for (let i = 0; i < this.columns.length; i++) {
            str = str + `$${i + 1}`
            if(i !== this.columns.length - 1){
                str = str + ','
            }
        }
        console.log(str)
        return str
    }

    getQuery() {
        const query = `CREATE TABLE ${this.table} (${this.constructTable()})`
        console.log(query)
        return query
    }
}

module.exports = BuiderModel