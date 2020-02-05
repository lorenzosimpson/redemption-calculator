export const fn = (multiplier, money, miles) => {
  if ((money / miles) * 100 >= multiplier) {
    return true;
    // true means good redemption, use miles
  }
  return false;
};

// ticket price / miles to redeem = cpm
// cpm >= average value
