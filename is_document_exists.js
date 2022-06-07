"use strict";
// xdmp.database("Documents")
const credential = {
  username: "xxxxx",
  password: "xxxxx",
};
const claimNumber = "5894";
const doc = `/claim/cc/${claimNumber}/1.xml`;

const uri = `http://localhost:8000/v1/documents?uri=${doc}`;
const uri2 = `http://localhost:8010/v1/documents?uri=${doc}`;

const getFormat = (fileName) =>
  fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length);
const getDoc = (doc) => {
  try {
    let x = xdmp.documentGet(doc, {
      format: getFormat(doc),
      authentication: {
        username: credential.username,
        password: credential.password,
      },
    });
    if (String(x) === "") return false;

    return x;
  } catch (e) {
    return false;
  }
};

const doc1 = getDoc(uri);
const doc2 = getDoc(uri2);

if (doc1 && doc2) {
  ("Document exists in both databases");
} else {
  `Document doesn't exists on ${!doc1 ? uri : uri2} database`;
}
