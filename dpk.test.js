const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the given partitionKey", () => {
    const partitionKey = "1234";
    const res = deterministicPartitionKey({ partitionKey });
    expect(res).toBe(partitionKey);
  });

  it("Returns a valid sha-3 512 hash when given an object", () => {
    const obj = { name: "James", value: "Test" };
    const res = deterministicPartitionKey(obj);
    const shaObj = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(obj))
      .digest("hex");
    expect(res).toBe(shaObj);
  });
});
