import { Router } from 'express';
const router = Router();

import { createProperty, getProperties, getPropertyById, deleteProperty, updateProperty} from '../controllers/propertiesController.js';

// /api/products/
router.post('/', createProperty);
router.get('/', getProperties);

// /api/products/:ProductID
router.get('/:id', getPropertyById);
router.delete('/:id', deleteProperty);
router.put('/:id', updateProperty)

export default router;