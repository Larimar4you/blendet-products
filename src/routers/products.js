import { Router } from 'express';

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../controllers/products.js';

import { authenticate } from '../middlewares/authenticate.js';

const productsRouter = Router();

productsRouter.use(authenticate);

productsRouter.get('/', getAllProducts);

productsRouter.get('/:productId', getProductById);

productsRouter.post('/', createProduct);

productsRouter.patch('/:productId', updateProduct);

productsRouter.delete('/:productId', deleteProduct);

export default productsRouter;
