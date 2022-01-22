const change = (amount, coins) => {
  // we create an array upto the amount, so that we can build no of ways at each amount.
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = 0; i <= amount; i++) {
      if (i >= coin) {
        // here i is the amount and if the amount is greater or equal to the coin calculate the no of ways
        dp[i] += dp[i - coin];
      }
    }
  }
  return dp[amount];
};

const amount = 5,
  coins = [1, 2, 5];
console.log(change(amount, coins));
