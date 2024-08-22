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

const server = new grpc.Server();

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 123-456-7890",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 987-654-3210",
  },
];

server.addService(customerProto.CustomerService.service, {
  getAll: (call, callback) => {
    callback(null, { customers });
  },
  get: (call, callback) => {
    let customer = customers.find((c) => c.id === call.request.id);

    if (customer) {
      callback(null, customer);
    } else {
      callback({ code: grpc.status.NOT_FOUND, details: "Customer not found" });
    }
  },
  insert: (call, callback) => {
    let customer = call.request;

    customer.id = Math.random();
    customers.push(customer);
    callback(null, customer);
  },
  update: (call, callback) => {
    let existingCustomer = customers.find((c) => c.id === call.request.id);

    if (existingCustomer) {
      existingCustomer.name = call.request.name;
      existingCustomer.email = call.request.email;
      existingCustomer.phone = call.request.phone;
      callback(null, existingCustomer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not Found",
      });
    }
  },
  remove: (call, callback) => {
    let existingCustomer = customers.find((c) => c.id === call.request.id);

    if (existingCustomer !== -1) {
      customers.splice(existingCustomer, 1);
      callback(null, {});
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not Found",
      });
    }
  },
  
});

server.bindAsync(
  "127.0.0.1:30043",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.log(`Error stating gRPC server: ${err}`);
    } else {
      server.start();
      console.log(`gRPC server is listening on ${port}`);
    }
  }
);
