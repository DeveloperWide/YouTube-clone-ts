import app from "./app";
const PORT = 5000;
import { connectDb } from "./config/db";

connectDb()
  .then((res) => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((er) => {
    console.log(er);
  });
