const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Pair = sequelize.define('Pair', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        time: {
            type: Sequelize.ARRAY(Sequelize.TIME)
        },
        voice_calls: {
            type: Sequelize.TIME,
        },
        messages: {
            type: Sequelize.TIME, 
        },
        videos: {
            type: Sequelize.TIME
        },
        active:{
            type: Sequelize.BOOLEAN
        }

        /* Probably need separate models to store contents.
         * Not sure what to store for voice calls and videos.
         * For now, just store the time stamps of each communication. */

    });
    
    return Pair 
};

