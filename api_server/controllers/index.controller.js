class index_controller{
    static index = (req, res) => {
        res.json({
            name: 'Shopping List',
            version: 'v1.0'
        })
    }
}

module.exports = index_controller;