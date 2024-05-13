'use client';

import { Input } from '@/common/components/Form/Input';
import { useHook } from './hook';
import { Button } from '@/common/components/Button';

interface Props {}

export const LoginForm: React.FC<Props> = () => {
  const { fieldProps, formik, isLoading } = useHook();

  return (
    <section className="bg-gradient relative flex w-full items-center overflow-hidden pb-6 pt-20 md:pt-24 lg:pb-10 lg:pt-32">
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="container">
          <div>
            <h2 className="mb-8 text-center text-4xl font-semibold lg:text-5xl">Login</h2>
          </div>
          <div className="flex-grow-1 flex w-full flex-col">
            <Input
              className="mt-2 w-full"
              label="Email"
              required
              name="email"
              errorMessage={formik.errors.email}
              {...fieldProps('email')}
            />
            <Input
              className="mt-2"
              type="password"
              label="Password"
              required
              name="password"
              errorMessage={formik.errors.password}
              {...fieldProps('password')}
            />
          </div>

          <Button className="mt-5 w-full" button="submit" onClick={formik.submitForm}>
            {isLoading ? '...' : 'Login'}
          </Button>
        </div>
      </form>
    </section>
  );
};
