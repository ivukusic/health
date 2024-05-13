import { Layout } from '@/modules/layout/default';
import { LoginForm } from '@/modules/auth/login';

export default function LoginPage() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div />

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
          <div className="min-w-[400px]">
            <LoginForm />
          </div>
        </div>

        <div />
      </div>
    </Layout>
  );
}
