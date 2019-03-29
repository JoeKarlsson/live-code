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

const concurrentStart = async () => {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second();

  console.log(await slow);
  console.log(await fast); // waits for slow to finish, even though fast is already done!
};

const stillConcurrent = () => {
  console.log("==CONCURRENT START with Promise.all==");
  Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    messages => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    }
  );
};

try {
  concurrentStart();
} catch (err) {
  console.error(err);
}
