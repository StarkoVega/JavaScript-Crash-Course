//
//
//
//
//
//
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log("Frontend Simplified");
    } else {
      console.log("Frontend");
    }
  } else if (i % 5 == 0) {
    console.log("Simplified");
  } else {
    console.log(i);
  }
}
