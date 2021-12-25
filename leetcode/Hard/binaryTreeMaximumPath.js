function maxPathSum(root) {
  let max_sum = -Infinity;

  function maxGain(node) {
    if (node === null) {
      return 0;
    }
    const left_gain = Math.max(maxGain(node.left), 0);
    const right_gain = Math.max(maxGain(node.right), 0);

    const price_newPath = node.val + left_gain + right_gain;

    max_sum = Math.max(max_sum, price_newPath);

    return node.val + Math.max(left_gain, right_gain);
  }
  maxGain(root);
  return max_sum;
}

const root = [1, 2, 3];

console.log(maxPathSum(root));
