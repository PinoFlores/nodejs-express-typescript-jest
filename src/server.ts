import app from "./app";

const env = app.get("env");
const port = app.get("port");

const server = app.listen(port, () => {
  console.log("  App is running at http://localhost:%d in %s mode", port, env);
  console.log("  Press CTRL-C to stop\n");
});

export default server;
