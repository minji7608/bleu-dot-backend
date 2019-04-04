module.exports = (sequelize, DataTypes) => {
    const Pair = sequelize.define('Pair', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        time: {
            type: type.ARRAY(type.TIME)
        },
        voice_calls: {
            type: type.TIME,
        },
        messages: {
            type: type.TIME, 
        },
        videos: {
            type: type.TIME
        }

        /* Probably need separate models to store contents.
         * Not sure what to store for voice calls and videos.
         * For now, just store the time stamps of each communication. */

    });
    
    return Pair 
};

