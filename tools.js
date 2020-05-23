const cookieJSON = function (cookieArray) {
  let data = [];
  for (let z = 0; z < cookieArray.length; z++) {
    if (cookieArray[z].includes("=")) {
      let a = cookieArray[z].split("=");
      if (a[0] == "expires") {
        a[1] = Date.parse(a[1]);
      }
      a[1] = `"${a[1]}"`;
      data.push(a.join(": "));
    } else data.push(cookieArray[z] + ": true");
  }
  return JSON.parse(JSON.stringify(`{${data.join(", ")}}`));
};

module.exports = {
  cookieJSON,
};
