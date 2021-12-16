let users
export default class UsersDAO { //calls as soon as server starts
static async injectDB(conn) {
    if (users) {
        return
    }
    try {
        users = await conn.db(process.env.USERS_NS).collection("users")
    } catch (e) {
        console.error(
            `unable to establish a connectiong handle in usersDAO: ${e}`,
        )
    }
}
static async getUsers({
    filters = null,
    page = 0,
    usersPerPage = 20
} = {}) {
    if (filters) {
        if ("username" in filters) {
            query = { $text: { $search: filters["username"]}}
        } else if ("location" in filters) {
            query = { $text: { $eq: filters["location"]}}
        } else if ("leader" in filters) {
            query = { $text: { $search: filters["leader"]}}
        }
    }

    let cursor

    try {
        cursor = await const .find(query)
    } catch (e) {
        console.error(`unable to issue find command, ${e}`)
    }
}