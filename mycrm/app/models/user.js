module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('tb_users', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firstname: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false

        },

        lastname: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },

        username: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        about: {
            type: Sequelize.TEXT
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE,
            allowNull: false
        },

        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        role: {
            type: Sequelize.TINYINT,
            allowNull: false
        },
        activation_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        gender: {
            type: Sequelize.ENUM('1', '2'),
            defaultValue: '1'
        },
        phone: {
            type: Sequelize.STRING
        },
        avatar: {
            type: Sequelize.STRING
        }


    });

    return User;

}