/* 322. Coin Change */

/* Brute force */

function coinChangeBrute(coins, amount) {
  if (amount === 0) return 0;
  let min = Infinity;
  coinRecurse(amount, 0);

  function coinRecurse(currAmt, count) {
    if (currAmt === 0) return 0;
    if (currAmt < 0) return -1;

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const res = coinRecurse(currAmt - coin, count + 1);
      if (res < 0) continue;
      if (res === 0) min = Math.min(min, count + 1);
    }
  }
  return min === Infinity ? -1 : min;
}

function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

/* Top Down approach */

function coinChange(coins, amount) {
  if (amount < 1) return 0;

  return helper(coins, amount, new Array(amount).fill(0));
}

function helper(coins, rem, dp) {
  if (rem < 0) return -1;

  if (rem === 0) return 0;

  if (dp[rem - 1] !== 0) return dp[rem - 1]; // we have a stored value

  let min = Infinity;
  for (const coin of coins) {
    res = helper(coins, rem - coin, dp);
    if (res >= 0 && res < min) {
      min = res + 1; // res plus one addition from the current move
    }
  }
  dp[rem - 1] = min === Infinity ? -1 : min;

  return dp[rem - 1];
}

const coins = [1, 2, 5],
  amount = 11;

console.log(coinChange(coins, amount));
