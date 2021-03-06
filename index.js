const app = require('express')();
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
const loginRouter = require('./routers/loginRouter');
const categorieRouter = require('./routers/categorieRouter');
const postRouter = require('./routers/postRouter');

require('dotenv').config();

app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categorieRouter);
app.use('/post', postRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
