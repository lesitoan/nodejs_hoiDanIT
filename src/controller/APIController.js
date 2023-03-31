import pool from '../configs/connectDB';

let getAllUsersAPI = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUserAPI = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'that bai'
        })
    }
    await pool.execute('insert into users(firstName, lastName, email, address) value(?, ?, ?, ?)',
        [firstName, lastName, email, address]);
    return res.status(200).json({
        message: 'ok'
    })
}

let updateUserAPI = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'that bai'
        })
    }
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?',
        [firstName, lastName, email, address, id]);
    return res.status(200).json({
        message: 'ok'
    })
}

let deleteUserAPI = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: 'that bai'
        })
    }
    await pool.execute('delete from users where id = ?', [userId]);
    return res.status(200).json({
        message: 'ok'
    })
}

module.exports = {
    getAllUsersAPI, createNewUserAPI, updateUserAPI, deleteUserAPI
}