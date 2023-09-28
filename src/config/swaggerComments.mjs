/**
 * @openapi
 * /:
 *   get:
 *     tags:
 *      - Hello!
 *     summary: Página de bienvenida!
 *     description: Retorna un mensaje de bienvenida.
 *     responses:
 *       200:
 *         description: Operación exitosa.
 *         content:
 *           application/json:
 *             example:
 *               message: Hello Toolbox!
 */

/**
 * @openapi
 * /files/list:
 *   get:
 *     tags:
 *      - files
 *     summary: Obtiene una lista de nombres de archivos
 *     description: Retorna un objeto que contiene un array con los nombres de los archivos.
 *     responses:
 *       200:
 *         description: La lista de nombres de archivos fue obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileList'
 * components:
 *   schemas:
 *     FileList:
 *       type: object
 *       properties:
 *         files:
 *           type: array
 *           items:
 *             type: string
 *             example: test1.csv
 */

/**
 * @openapi
 * /files/data:
 *   get:
 *     tags:
 *       - files
 *     summary: Obtiene una lista de archivos o los datos de un archivo específico
 *     description: Si se proporciona fileName, devuelve los datos del archivo específico, de lo contrario, devuelve una lista de archivos.
 *     parameters:
 *       - in: query
 *         name: fileName
 *         schema:
 *           type: string
 *         description: El nombre del archivo a recuperar.
 *         required: false
 *     responses:
 *       200:
 *         description: Operación exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - $ref: '#/components/schemas/File'
 *                 - type: array
 *                   items:
 *                     $ref: '#/components/schemas/File'
 *       404:
 *         description: File not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 * components:
 *   schemas:
 *     Line:
 *       type: object
 *       properties:
 *         text:
 *           type: string
 *         number:
 *           type: integer
 *         hex:
 *           type: string
 *     File:
 *       type: object
 *       properties:
 *         file:
 *           type: string
 *         lines:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Line'
 */
