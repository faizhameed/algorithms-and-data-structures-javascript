//This question is easy but slightly tricky to implement understand how to merger to base array for a sorted aray

//this is basic type but its run time is  O(nlog(n))
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
};

//Doing the same questions in O(m+n)
