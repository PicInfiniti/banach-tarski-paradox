// main.js
import Sphere from "./core/sphere";
import "./assets/sass/main.sass";
const env = import.meta.env;

export default class App {
  constructor(env) {
    this.env = env;
    this.test = new Sphere(this);
  }

  init() {
    this.test.init();
  }
}
const app = new App(env);
app.init();
