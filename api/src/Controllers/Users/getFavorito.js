const {Favorite} = require("../../database");


const getFavorite = async () => {
    const allFavorito = await Favorite.findAll();
    return allFavorito
}

module.exports = getFavorite;