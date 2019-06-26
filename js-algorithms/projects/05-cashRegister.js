/*
-------------------------------------------------------------------------------
JavaScript Algorithms and Data Structures Projects: Cash Register
-------------------------------------------------------------------------------
Design a cash register drawer function checkCashRegister() that accepts purchase
price as the first argument (price), payment as the second argument (cash), and
cash-in-drawer (cid) as the third argument.

CURRENCY UNITS
$0.01 (PENNY)
$0.05 (NICKEL)
$0.1 (DIME)
$0.25 (QUARTER)
$1 (DOLLAR)
$5 (FIVE)
$10 (TEN)
$20 (TWENTY)
$100 (ONE HUNDRED)

------
NOTE:
- cid is a 2D array listing available currency.

- The checkCashRegister() function should always return an object with a status
key and a change key.

- Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less
than the change due, or if you cannot return the exact change.

- Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for
the key change if it is equal to the change due.

- Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins
and bills, sorted in highest to lowest order, as the value of the change key.
------
TESTS:
  - npm test phoneValidator
  - npm test
*/

function checkCashRegister(price, cash, cid) {
  let diff = Math.round((cash - price) * 100) / 100;
  const change = [];
  const total = Math.round(cid.reduce((acc, curr) => acc + curr[1], 0.00) * 100) / 100;
  const currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.10,
    QUARTER: 0.25,
    ONE: 1.00,
    FIVE: 5.00,
    TEN: 10.00,
    TWENTY: 20.00,
    'ONE HUNDRED': 100.00,
  };

  if (total < diff) return { status: 'INSUFFICIENT_FUNDS', change };
  if (total === diff) return { status: 'CLOSED', change: cid };

  for (let i = cid.length - 1; diff > 0 && i >= 0; i--) {
    let value = 0;
    while (diff >= currency[cid[i][0]] && cid[i][1] > 0) {
      cid[i][1] = Math.round((cid[i][1] - currency[cid[i][0]]) * 100) / 100;
      value = Math.round((value + currency[cid[i][0]]) * 100) / 100;
      diff = Math.round((diff - currency[cid[i][0]]) * 100) / 100;
    }
    if (value > 0) change.push([cid[i][0], value]);
  }
  if (diff > 0) return { status: 'INSUFFICIENT_FUNDS', change: [] };

  return { status: 'OPEN', change };
}

module.exports = { checkCashRegister };
