'use client';

import { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useApiSend } from '@/core/api/useApiGet';
import { mutationSignUp } from '@/core/api/requests/auth';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { authActions } from '@/core/redux/slices/authSlice';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
  gender: { label: string; value: string } | null;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordRepeat: '',
  gender: null,
};

export const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

export const useHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutate } = useApiSend({
    fn: mutationSignUp,
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
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().required('Password required'),
    passwordRepeat: Yup.string().required('Password repeat required'),
  });

  const handleSave = async (values: FormValues) => {
    if (values.password !== values.passwordRepeat) {
      formik.setFieldError('passwordRepeat', 'Repeat password do not match password');
    } else {
      setIsLoading(true);
      await mutate({
        ...values,
        gender: values.gender ? values.gender.value : '',
      } as any);
      setIsLoading(false);
    }
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
