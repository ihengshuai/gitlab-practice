async function bootstrap() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

(async () => await bootstrap())();
