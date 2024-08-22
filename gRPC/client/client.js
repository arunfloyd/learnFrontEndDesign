
const PROTO_PATH = "./customers.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const customerProto = grpc.loadPackageDefinition(packageDefinition);


const client = new customerProto.CustomerService(
  "127.0.0.1:30043",
  grpc.credentials.createInsecure()
);
module.exports = client;
