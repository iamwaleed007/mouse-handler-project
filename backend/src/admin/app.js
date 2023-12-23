import favicon from "./extensions/favicon.ico";
import logo from "./extensions/logo.svg";

const config = {
  locales: ["en"],
  tutorials: false,
  auth: {
    logo: logo,
  },
  head: {
    favicon: favicon,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "WNVOEC Dashboard",
      "Auth.form.welcome.title": "Welcome to WNVOEC!",
      "Auth.form.welcome.subtitle": "Log in to your WNVOEC account",
      "app.components.HomePage.welcomeBlock.content.again": " ",
      "app.components.HomePage.button.blog": " ",
      "Auth.form.register.subtitle":
        "Credentials are only used to authenticate in Dashboard. All saved data will be stored in your database.",
    },
  },
};

const bootstrap = (app) => {
  // console.log(app);
};

export default {
  config,
  bootstrap,
};
