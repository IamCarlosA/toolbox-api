import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import router from './routers/router.mjs';
import specs from './config/swagger.mjs';

export const app = express();

app.use(cors());
app.use(morgan('short'));
app.use('/', router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = 3500;

app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});
