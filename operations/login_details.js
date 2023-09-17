const Database = require('../services/database');
const Response = require('../services/response');
let CONSTANTS = require('../lib/constants');

let self = module.exports = {
    login: async function (value) {
        return new Promise(async (resolve, reject) => {
            try {

                let query = `select * from ` + CONSTANTS.TABLES.LOGIN_DETAILS + ` where loginId = ${loginId}`;

                let is_exist = await Database.is_exist(query);

                if (is_exist ) {
                    let querytoFetchUser = `select * from ${CONSTANTS.TABLES.LOGIN_DETAILS} where loginId= ${loginId} AND password = ${password}`
                    let fetchData= await Database.fetch_array(querytoFetchUser)
                    if(fetchData.length){
                        resolve({...Response.success,message:"YOU EXIST" })
                    }
                    else{
                        resolve({code:200, message : "Wrong Password"})
                    }                     

                } else {

                   resolve(Response.does_not_exist)

                }

            }
            catch (e) {
                reject(e)
            }
        })
    },
    update: async function (value, id) {
        return new Promise(async (resolve, reject) => {
            try {

                let query = `select name from ` + CONSTANTS.TABLES.MASTER + ` where id='${id}'`;

                let is_exist = await Database.is_exist(query);

                if (is_exist === 1) {

                    let update = `update ` + CONSTANTS.TABLES.MASTER + ` set name='${value}' where id='${id}'`;

                    let response = await Database.update(update)

                    resolve(Response.success)

                } else {

                    resolve(Response.does_not_exist);

                }

            }
            catch (e) {
                reject(e)
            }
        })
    },
    fetch_all: async function () {
        return new Promise(async (resolve, reject) => {
            try {

                let query = `select id, name from ` + CONSTANTS.TABLES.MASTER;

                let response = await Database.fetch(query);

                resolve({
                    ...Response.success,
                    result: response.result
                })

            }
            catch (e) {
                reject(e)
            }
        })
    },
    fetch: async function (id) {
        return new Promise(async (resolve, reject) => {
            try {

                let query = `select name from ` + CONSTANTS.TABLES.MASTER + ` where id='` + id + `'`;

                let is_exist = await Database.is_exist(query);

                if (is_exist === 1) {

                    let query = `select id, name from ` + CONSTANTS.TABLES.MASTER + ` where id='` + id + `'`;

                    let response = await Database.fetch(query);

                    resolve({
                        ...Response.success,
                        result: response.result
                    })

                } else {

                    resolve(Response.does_not_exist);

                }
            }
            catch (e) {
                reject(e)
            }
        })
    },
    delete: async function (id) {
        return new Promise(async (resolve, reject) => {
            try {

                let query = `select name from ` + CONSTANTS.TABLES.MASTER + ` where id='` + id + `'`;

                let is_exist = await Database.is_exist(query);

                if (is_exist === 1) {

                    let query = `delete from ` + CONSTANTS.TABLES.MASTER + ` where id='` + id + `'`;

                    let response = await Database.delete(query);

                    resolve(Response.success)

                } else {

                    resolve(Response.does_not_exist);

                }
            }
            catch (e) {
                reject(e)
            }
        })
    },
}