const express = require('express')
const router = express.Router()
const index_controller = require('../controllers/index.controller')
const {
    create_item,
    delete_items_by_id,
    get_all_items,
} = require('../controllers/items_controller')

router.route('/').get(index_controller.index)

router.route('/shopping_list').post(create_item).get(get_all_items)

router.route('/shopping_list/:id').delete(delete_items_by_id)

module.exports = router