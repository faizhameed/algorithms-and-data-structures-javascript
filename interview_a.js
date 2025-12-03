function uniqueWays(numLogs) {
  function recursiveCheck(logs) {
    if (logs === 0) {
      return 1;
    }
    if (logs < 0) {
      return 0;
    }

    return (
      recursiveCheck(logs - 1) +
      recursiveCheck(logs - 2) +
      recursiveCheck(logs - 3)
    );
  }
  return recursiveCheck(numLogs + 1);
}

console.log(uniqueWays(3));
