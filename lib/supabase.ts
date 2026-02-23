import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      hero_content: {
        Row: {
          id: string
          title: string
          subtitle: string
          cta_text: string
          cta_link: string
          background_image: string
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['hero_content']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['hero_content']['Insert']>
      }
      products: {
        Row: {
          id: string
          name: string
          category: string
          description: string
          image_url: string
          features: string[]
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['products']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['products']['Insert']>
      }
      testimonials: {
        Row: {
          id: string
          name: string
          role: string
          content: string
          avatar_url: string | null
          rating: number
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['testimonials']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['testimonials']['Insert']>
      }
    }
  }
}
