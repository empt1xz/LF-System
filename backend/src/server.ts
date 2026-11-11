import { app } from './lib/express'

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Aplicação ligada na port ${port}`);
});
