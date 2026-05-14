import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cpbpazjwjulyjdenkegz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwYnBhemp3anVseWpkZW5rZWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3MzE0MzAsImV4cCI6MjA5NDMwNzQzMH0._36zfYoNSGsZQ2RCsgX062N9q-pTikWstLjI4DcbC_Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
