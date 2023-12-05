import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import router from './routers/router.mjs';
import specs from './config/swagger.mjs';
import dotenv from 'dotenv';
dotenv.config();

export const app = express();

app.use(cors());
app.use(morgan('short'));
app.use('/', router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});
