import knex from "knex";
// import configuration from '../../knexfile';

const configuration = require("../../knexfile");

const connection = knex(configuration.development);

export default connection;
