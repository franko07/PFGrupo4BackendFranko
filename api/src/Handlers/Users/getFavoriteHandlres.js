const getFavorite = require("../../Controllers/Users/getFavorito")


const handlersGetFav = async (req, res) => {
    try {
        const favoritos = await getFavorite()
        res.status(200).json(favoritos)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = handlersGetFav;