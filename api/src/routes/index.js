const {Router} = require ('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/api/search', async (req, res) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=12&offset=${req.query.offset}&sort=${req.query.sort}`)
    const json = await response.json()
    res.json(json)
})

router.get('/api/item/:id', async (req, res) => {
    id = req.params.id
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
    const json = await response.json()
    res.json(json)
})

router.get('/api/search/condition', async (req, res) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=12&offset=${req.query.offset}&sort=${req.query.sort}&ITEM_CONDITION=${req.query.ITEM_CONDITION}`)
    const json = await response.json()
    res.json(json)
})


module.exports = router;