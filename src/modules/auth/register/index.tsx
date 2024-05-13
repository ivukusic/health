'use client';

import { Input } from '@/common/components/Form/Input';
import { genderOptions, useHook } from './hook';
import { Select } from '@/common/components/Form/Select';
import { Button } from '@/common/components/Button';

interface Props {}

export const RegisterForm: React.FC<Props> = () => {
  const { fieldProps, formik, isLoading } = useHook();

  return (
    <section className="bg-gradient relative flex w-full items-center overflow-hidden pb-6 pt-20 md:pt-24 lg:pb-10 lg:pt-32">
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="container">
          <div>
            <h2 className="mb-8 text-center text-4xl font-semibold lg:text-5xl">Register</h2>
          </div>
          <div>
            <Input
              className="mt-2"
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
            <Input
              className="mt-2"
              type="password"
              label="Repeat password"
              required
              name="passwordRepeat"
              errorMessage={formik.errors.passwordRepeat}
              {...fieldProps('passwordRepeat')}
            />

            <div className="mt-5 grid gap-x-3 lg:grid-cols-2">
              <Input
                className="mt-2"
                label="First name"
                name="firstName"
                required
                errorMessage={formik.errors.firstName}
                {...fieldProps('firstName')}
              />
              <Input
                className="mt-2"
                label="Last name"
                name="lastName"
                required
                errorMessage={formik.errors.lastName}
                {...fieldProps('lastName')}
              />
            </div>
          </div>

          <div className="grid gap-3">
            <Select
              options={genderOptions}
              required
              label="Gender"
              errorMessage={formik.errors.gender}
              {...fieldProps('gender')}
            />
          </div>

          <Button className="mt-5 w-full" button="submit" onClick={formik.submitForm}>
            {isLoading ? '...' : 'Register'}
          </Button>
        </div>
      </form>
    </section>
  );
};
