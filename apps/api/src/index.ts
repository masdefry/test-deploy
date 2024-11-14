import App from './app';
import 'module-alias/register';

const main = () => {
  // init db here

  const app = new App();
  app.start();
};

main();
