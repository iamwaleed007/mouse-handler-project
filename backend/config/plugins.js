module.exports = ({ env }) => ({
  // email: {
  //   config: {
  //     provider: "nodemailer",
  //     providerOptions: {
  //       host: env("SMTP_HOST", "smtpout.secureserver.net"),
  //       port: env("SMTP_PORT", 465),
  //       auth: {
  //         user: env("SMTP_USERNAME", "cruz.murphy@ethereal.email"),
  //         pass: env("SMTP_PASSWORD", "r1yzbEmVEkEeUfrpU3"),
  //       },
  //     },
  //     settings: {
  //       defaultFrom: "info@wnvoec.org",
  //       defaultReplyTo: "info@wnvoec.org",
  //     },
  //   },
  // },
});

// const nodemailerNTLMAuth = require("nodemailer-ntlm-auth");

// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: "nodemailer",
//       providerOptions: {
//         host: env("SMTP_HOST", "smtp.example.com"),
//         port: env("SMTP_PORT", 587),
//         secure: false,
//         auth: {
//           type: "custom",
//           method: "NTLM",
//           user: env("SMTP_USERNAME"),
//           pass: env("SMTP_PASSWORD"),
//         },
//         customAuth: {
//           NTLM: nodemailerNTLMAuth,
//         },
//       },
//       settings: {
//         defaultFrom: "iamwaleed07@gmail.com",
//         defaultReplyTo: "iamwaleed07@gmail.com",
//       },
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: "nodemailer",
//       providerOptions: {
//         host: "localhost",
//         port: 1025,
//         ignoreTLS: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 20971520,
      },
    },
  },
});
