import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgres://postgres:12@localhost:5432/restaurants",
});

const fetchData = async (sql: any, ...params: any) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(sql, params);
    return rows;
  } finally {
    client.release();
  }
};

export { fetchData };
