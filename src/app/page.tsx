// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/home'); // Redirect root URL to /home
}
