const resolveAfter2Seconds = () => {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(20);
      console.log("slow promise is done");
    }, 2000);
  });
};

const resolveAfter1Second = () => {
  console.log("starting fast promise");
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(10);
      console.log("fast promise is done");
    }, 1000);
  });
};

resolveAfter2Seconds()
  .then(message => console.log(message))
  .catch(err => console.error(err));

resolveAfter1Second()
  .then(message => console.log(message))
  .catch(err => console.error(err));
