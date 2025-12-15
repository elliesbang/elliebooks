import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

/**
 * ⚠️ 중요 원칙
 * - localStorage 직접 접근 ❌
 * - Supabase가 내부적으로 storage 관리
 * - iframe / preview에서도 죽지 않게 안전 구성
 */

const SUPABASE_URL =
  window.SUPABASE_URL ||
  "https://YOUR_PROJECT_ID.supabase.co";

const SUPABASE_ANON_KEY =
  window.SUPABASE_ANON_KEY ||
  "YOUR_PUBLIC_ANON_KEY";

/**
 * storage 접근이 막힌 환경 대비
 */
const safeStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      storage: safeStorage, // 🔥 핵심
    },
  }
);
