const express =require('express');
const InventoryController=require('../../controllers/Inventory');
const router=express.Router();

router.get('',InventoryController.InventorySearchController);

module.exports=router;