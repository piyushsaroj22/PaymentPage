import Razorpay from "razorpay";

import env from "../../config/env.js";

const razorpay = new Razorpay({
  key_id: env.RAZORPAY_KEY_ID,
  key_secret: env.RAZORPAY_KEY_SECRET,
});

export default razorpay; // TODO baad me enable karna hai

// import Razorpay from "razorpay";
// import env from "../../config/env.js";

// console.log("KEY ID:", env.RAZORPAY_KEY_ID);
// console.log("KEY SECRET LENGTH:", env.RAZORPAY_KEY_SECRET.length);

// const razorpay = new Razorpay({
//   key_id: env.RAZORPAY_KEY_ID,
//   key_secret: env.RAZORPAY_KEY_SECRET,
// });

// export default razorpay;
