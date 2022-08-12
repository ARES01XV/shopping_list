const { JSONResponse } = require('../lib/helper')
const Items = require('../models/items_model')

//GET ALL ITEMS-------------------------------------------
exports.get_all_items = async (req, res) => {
    try {
        const items = await Items.find()
        JSONResponse.success(res, 'Success.', items, 200)
    } catch (error) {
        JSONResponse.error(res, 'Failure handling items model.', error, 500)
    }
}

//CREATE AN ITEM-------------------------------------------
exports.create_item = async (req, res) => {
    try {
        const items = await Items.create(req.body)
        JSONResponse.success(res, 'Success.', items, 200)
    } catch (error) {
        JSONResponse.error(res, 'Failure handling items model.', error, 500)
    }
}

//DELETING ITEMS-------------------------------------------
exports.delete_items_by_id = async (req, res) => {
    try {
        const item = await Items.findById(re.params.id)
        if (item) await item.delete()
        JSONResponse.success(res, 'Success.', item, 200)
    } catch (error) {
        JSONResponse.error(res, 'Failure handling items model.', error, 500)
    }
}