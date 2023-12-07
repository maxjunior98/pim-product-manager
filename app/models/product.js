const execute = require('modules/database')

class Product 
{
    constructor(data) 
    {
        if(data.hasOwnProperty('pid')){
            this.pid = data.pid
        }
        this.title = data.title
        this.description = data.description
        this.price = data.price
    }

    create(){
        
    }

    read(){

    }

    update(){

    }

    delete(){

    }

}

module.exports = Product