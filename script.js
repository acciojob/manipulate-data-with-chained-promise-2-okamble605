const fetchData = () => {
  return Promise.resolve("Hello");
};

fetchData()
  .then((v) => {
    console.log(v);
    return v + "Hey";
  })
  .then((nv) => {
    console.log(nv);
    return Promise.reject(nv + "C");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("error", err);
    throw "Oops";
  })
  .catch((e) => {
    console.log(e);
  });