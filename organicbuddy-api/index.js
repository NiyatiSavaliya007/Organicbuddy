const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require('./config/dbConnect');
const {notFound , errorHandler} = require("./middlewares/errorHandler");
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/prodcategoryRoute");
const blogcategoryRouter = require("./routes/blogCatRoute");
const typeRouter = require("./routes/typeRoute");
const enqRouter = require("./routes/enqRoute");
const couponRouter = require("./routes/couponRoute");
const uploadRouter = require("./routes/uploadRoute");

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
dbConnect();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(cookieParser());

app.use("/api/user",authRouter);
app.use("/api/product",productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/type", typeRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
});