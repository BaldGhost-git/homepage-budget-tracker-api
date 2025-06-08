import mongoose from "mongoose";

const { DB_HOST, DB_PORT, DB_NAME } = Deno.env.toObject();

export const connect = async () => {
  if (mongoose.connection.readyState === 1) return;

  try {
    const res = await mongoose.connect(
      `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any,
    );

    console.log(`[INFO] Connected to ${res.connection.host}`);
  } catch (err) {
    console.error(`[ERROR] Failed to connect to ${DB_HOST}`);
    console.error(err);
  }
};
