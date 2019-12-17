module.exports = {
  development: {
    client: "pg",
    connection: 
      "postgres://ivhpfizk:iKNitDBLlSpqBi90N_eojSQ7Jtp2NEGE@rajje.db.elephantsql.com:5432/ivhpfizk"
    ,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: { directory: "./database/seeds" }
  },

  staging: {
    client: "pg",
    connection: {
      database:
        "postgres://gkkjqdycpnjjnm:97318f4e59195ff318e438c793cf84fffd5047098de9a475dade2594b93ad10c@ec2-107-21-93-51.compute-1.amazonaws.com:5432/dr8bvlv4nil54"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: { directory: "./database/seeds" }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: { directory: "./database/seeds" }
  }
};
