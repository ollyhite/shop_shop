const db = require("../config/connection");
const { User, Product, Category } = require("../models");
const productsSeeds = require("./products.json");
const categorySeeds = require("./categories.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Category.deleteMany({});
    const newProduct = await Product.create(productsSeeds);
    const newCategory = await Category.create(categorySeeds);
    // for (let index = 0; index < newUsers.length; index++) {
    //   const user = newUsers[index];
    //   const randomNumber = Math.floor(Math.random() * 2);
    //   const updatedUser = await User.findByIdAndUpdate(
    //     user._id,
    //     {
    //       $addToSet: { events: newEvents[randomNumber] },
    //     },
    //     {
    //       new: true,
    //     }
    //   ).populate("events");
    //   //.populate puts in everything associated with the mongo id it is referencing!
    //   // console.log(updatedUser);
    // }
    // const newResources = await Resource.create(resourceSeeds);
    // const newUserResource = await User.updateMany(
    //   newUsers._id,
    //   {
    //     $addToSet: { resources: newResources },
    //   },
    //   { new: true }
    // ).populate("resources");

    // console.log(newUserResource);
    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
