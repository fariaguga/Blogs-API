const app = require('express')();
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');

require('dotenv').config();

app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
