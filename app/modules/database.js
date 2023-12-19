const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

async function execute(query, values)
{
    try {
        const result = await pool.query(query, values)
        // console.log(result)
        return result
    } 
    catch (e) {
        console.log("ERRO EM EXECUÇÃO DE QUERY")
        console.log(e)
        return {}
    }
}

module.exports = execute