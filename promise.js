let placeOrder = (drink) => {
  return new Promise(function (res, rej) {
    if (drink === "coffee") {
      res("Promise resolved");
    } else {
      rej("Promise rejected");
    }
  });
};
placeOrder("tea")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
