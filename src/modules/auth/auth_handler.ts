// @deno-types="npm:@types/express@5.0.3";

export function login(req, res) {
  const { username, password } = req.body;
  // TODO: Check if user exists
  // TODO: Compare password from username

  // TODO: Call function to generate JWT
  // TODO: Return data in a standardized manner;
  res.send("Success");
}

export function register(req, res) {
  const { username, password, full_name, email } = req.body;
  // TODO: Check if user exists
  // TODO: Save to database

  // TODO: Return data in a standardized manner;
  res.send("Success");
}
