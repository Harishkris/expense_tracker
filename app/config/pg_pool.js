import { Pool } from 'pg';

import dotenv from 'dotenv';

dotenv.config();

const databaseConfig = { connectionString: process.env.POSTGRE_URI };
const pool = new Pool(databaseConfig);

export default pool;