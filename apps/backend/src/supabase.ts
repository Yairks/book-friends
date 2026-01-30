// config/supabase.js
import { Database } from '@shared/supabase';
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase configuration is missing. Set SUPABASE_URL and SUPABASE_ANON_KEY in your .env file');
}

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
