import { createVuestic } from "vuestic-ui";
import "vuestic-ui/styles/essential.css";
import "vuestic-ui/styles/typography.css";
import "./styles/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./app.vue";
import { router, config } from "./providers";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(
  createVuestic({
    config,
  })
);

export const application = app;
