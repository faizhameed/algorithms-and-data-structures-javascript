function parsePaymentStrings(paymentString, invoicesList) {
  const [paymentId, amount, payForString] = paymentString
    .split(",")
    .map((item) => item.trim().replace(":", "").trim());
  const payFor = payForString.split(" ").join("")[1];
  console.log("")
  // removes "pay for:" from the string
  const invoice = invoicesList.find((invoice) => invoice.id === payFor);
  if (!invoice) return null;
  return `Paid ${invoice.id} for ${amount} on ${invoice.date} with ${paymentId}`;
}

console.log(
  parsePaymentStrings("paymentId1,1000,pay for: invoice1", [
    "invoice2,13-03-2025,3000",
    "invoice1,12-03-2025,2000",
    "invoice3,14-03-2025,4000",
  ])
);
//expected output: Paid invoice1 for 1000 on 12-03-2025 with paymentId1

// 2nd questions

console.log(
    parsePaymentStrings("paymentId1,1000,user Faiz", [
      "invoice1,13-03-2025,1000",
      "invoice2,12-01-2025,2000",
      "invoice3,19-06-2025,4000",
    ])
  );
  // expected output: Paid invoice1 for user Faiz for amount 1000 on 12-03-2025 with paymentId1

  console.log(
    parsePaymentStrings("paymentId1,1000,user Faiz", [
      "invoice1,13-03-2025,1000",
      "invoice2,12-01-2025,1000",
      "invoice3,19-06-2025,4000",
    ])
  );

//  expected output: Paid invoice2 for user Faiz for amount 1000 on 12-01-2025 with paymentId1