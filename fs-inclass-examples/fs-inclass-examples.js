"use strict";

//USING PROMISES
// //using promises

// try {
//   import fs from "node:fs/promises"
// const data = await fs.readFile("data.txt", "utf8")
// console.log(data)


// } catch (error) {
//   console.log(error)
// }

// //updating a file with promises, try catch, await etc

// try {
//   await fs.writeFile("data.txt", "Some data!")
// } catch (error) {
//   console.log("Error:", error)
// }

// import fs from "fs";

//SYNCHRONOUS OPERATIONS
//Append to file - synchronous
//create file or if it already exists add to end of a file each time it is run
// fs.appendFileSync("test.txt", "Test!")

//Overwrite the data of a file
// fs.writeFileSync("test.txt", "Test!")

// const data = fs.readFileSync("test.txt", "utf8")

// console.log(data)

// // delete file
// fs.unlinkSync("test.txt")

//ASYNCHRONOUS OPERATIONS

fs.writeFile("test.txt", "Test 2", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File created!");
});

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.appendFile("test.txt", "\nAnother Test", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

// fs.unlink("test.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

//make a new directory/folder
fs.mkdirSync("test")

fs.writeFile("./test/test.txt", "I am in a folder!", (err) => {
      if (err) {
        console.log(err);
        return;
      }
})
