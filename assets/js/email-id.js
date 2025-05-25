// email.js
const emails = [
  "grass@mail.sujoy.me",
  "air@mail.sujoy.me",
  "sky@mail.sujoy.me",
  "water@mail.sujoy.me",
];

const supportEmail = emails[Math.floor(Math.random() * emails.length)];

module.exports = supportEmail;
