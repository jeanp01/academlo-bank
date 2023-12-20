import app from './app.js';
import { envs } from './enviroments/enviroments.js';

async function main() {
  try {
    await authenticate();
    await syncUp();
  } catch (error) {
    console.error(error);
  }
}

main();

app.listen(envs.PORT, () => {
  console.log(`server runing on port ${envs.PORT}`);
});
