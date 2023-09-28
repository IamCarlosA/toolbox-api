import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Toolbox-API con Swagger',
      version: '1.0.0',
      description: 'Una API de Express con documentación automática con Swagger',
      contact: {
        name: 'Carlos Alvarado',
        email: 'carlosandres.alvarado2000@gmail.com',
        url: 'https://www.linkedin.com/in/carlos-andr%C3%A9s-alvarado-calder%C3%B3n-264a07183/',
      },
    },
  },
  apis: ['src/config/swaggerComments.mjs'],
};


const specs = swaggerJsdoc(options);

export default specs;
