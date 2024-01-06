const { Favorite } = require("../../database");



const postFavorite = async ( req, res) => {
    // try {
    //     const auxFav = await Favorite.bulkCreate(
    //         favItems
    //     );

    //     if (auxFav) {
    //         const auxResult = auxFav.map(ele => {
    //             return {
                   
    //                 name: ele.name,
    //                 image: ele.image,
    //                 price: ele.price
    //             }
    //         })
    //         return auxResult;
    //     } else {
    //         res.status(500).send("Favorite not created");    
    //     }
    // } catch (error) {
    
    //     res.status(500).send("postUserShoppingCartController not found");
    //   }

    const { name, image, price } = req.body;
    try {
        if(!name || !image || !price) {
            return res.status(401).send("Faltan datos");
        }
        // Se guarda el favorito en la base de datos utilizando el método findOrCreate:
        await Favorite.findOrCreate({
            where: {
                
                name: name,
                image: image,
                price: price
            }
        })
        // Se buscan todos los personajes favoritos guardados en la base de datos:
        const favorites = await Favorite.findAll();

        // Se responde con el arreglo de personajes favoritos:
        return res.status(200).json(favorites);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = postFavorite;