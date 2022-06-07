"use strict";
const credential = {
  username: "xxxx",
  password: "xxxx",
};

xdmp.documentGet("http://localhost:8000/v1/documents?uri=sample.xml", {
  format: "xml",
  authentication: {
    username: credential.username,
    password: credential.password,
  },
});
