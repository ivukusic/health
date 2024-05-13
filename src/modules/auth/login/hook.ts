'use client';

import { useState } from 'react';

import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { mutationSignIn } from '@/core/api/requests/auth';
import { useApiSend } from '@/core/api/useApiGet';
import { authActions } from '@/core/redux/slices/authSlice';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: 'ivanvukusic15@gmail.com',
  password: 'Test@#12345',
};

export const useHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutate } = useApiSend({
    fn: mutationSignIn,
    onSuccess: (res: any) => {
      if (res.data?.accessToken && res.data.user) {
        dispatch(authActions.updateAccessToken(res.data.accessToken));
        dispatch(authActions.updateUser(res.data.user));
      }
      router.push('/');
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema: any = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().required('Password required'),
  });

  const handleSave = async (values: FormValues) => {
    setIsLoading(true);
    await mutate(values as any);
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: handleSave,
  });

  const fieldProps = (field: string) => {
    const data: any = formik.getFieldProps(field);
    const { error: fieldError, touched } = formik.getFieldMeta(field);

    data.onChangeText = (v: any): void => {
      formik.handleChange(field)({ target: { value: v } } as any);
      if (fieldError) {
        formik.validateField(field);
      }
    };
    if (field === 'gender') {
      data.onChange = (v: any): void => {
        formik.handleChange(field)({ target: { value: v } } as any);
        if (fieldError) {
          formik.validateField(field);
        }
      };
    }
    return { ...data, error: fieldError, touched, disabled: isLoading };
  };

  return {
    initialValues,
    isLoading,
    fieldProps,
    formik,
    schema,
  };
};
