const projectName = "mern-skeleton";

export default {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "my$uper$3cre3t",
  mongoUri: process.env.MONGO_URI || `mongodb://localhost:27017/${projectName}`,
};
