import mongoose from "mongoose";

//define Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// Creating Model

const MovieModel = mongoose.model("Movie", movieSchema);

//Updating data
// updateOne(filter, whatToChange?)
const deleteData = async (id) => {
  try {
    // const result = await MovieModel.findByIdAndDelete("6608ea024af28e1171fc5501")
    // const result = await MovieModel.deleteOne(
    //   {name: "Extraction 2"}
    // );
    const result = await MovieModel.deleteMany(
      {name: "Johnwick 4"}
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { deleteData };
