import ha from './ha.ts'

// Write your automations here
ha.onStateChange("sun.sun", (state) => {
  if (state === "above_horizon") {
    console.log("Sunrise!");
  } else {
    console.log("Sunset!");
  }
});
