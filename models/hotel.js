module.exports = (sequelize, DataTypes) => {
    const Hotel = sequelize.define("Hotel", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Tipe_kamar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Kapasitas_Tamu: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Lantai: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Fasilitas: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Tanggal_Pesan: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: "hotel",
        freezeTableName: true,
        timestamps: true
    });
    return Hotel;
};