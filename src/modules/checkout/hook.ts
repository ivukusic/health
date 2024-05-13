'use client';

import { useEffect, useMemo, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SelectOption } from '@/common/components/Form/Select';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/core/redux/store';
import { useApiSend } from '@/core/api/useApiGet';
import { mutationSendCart } from '@/core/api/requests/auth';
import { cartActions } from '@/core/redux/slices/cartSlice';

interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  country: SelectOption | null;
  city: string;
  state: string;
  postalCode: string;
  phoneNumber: string;
}

const initialValues: FormValues = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  apartment: '',
  country: null,
  city: '',
  state: '',
  postalCode: '',
  phoneNumber: '',
};

export const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

export const useHook = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const country = useSelector((state: RootState) => state.cart.country);

  const router = useRouter();

  const { mutate } = useApiSend({
    fn: mutationSendCart,
    onSuccess: () => {
      dispatch(cartActions.resetCountry());
      router.push('/');
    },
    onError: () => {
      dispatch(cartActions.resetCountry());
      router.push('/');
    },
  });

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema: any = Yup.object().shape({
    email: Yup.string().required('Required field'),
    firstName: Yup.string().required('Required field'),
    lastName: Yup.string().required('Required field'),
    address: Yup.string().required('Required field'),
    apartment: Yup.string().required('Required field'),
    city: Yup.string().required('Required field'),
    state: country?.value === 'USA' ? Yup.string().required('Required field') : Yup.string(),
    postalCode: Yup.string().required('Required field'),
    phoneNumber: Yup.string().required('Required field'),
  });

  const handleContinue = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length) {
      setErrorMessage('Invalid form data. Please review all of the data.');
    } else {
      const { values } = await formik;
      console.log(values);
      setIsLoading(true);
      await mutate();
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: handleContinue,
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
    if (field === 'country') {
      data.onChange = (v: any): void => {
        formik.handleChange(field)({ target: { value: v } } as any);
        if (fieldError) {
          formik.validateField(field);
        }
      };
    }
    return { ...data, error: fieldError, touched, disabled: isLoading };
  };

  const totalPrice = useMemo(() => {
    let price = 0;
    if (cartItems.length) {
      cartItems.forEach(item => {
        price += item.price;
      });
    }
    return price;
  }, [cartItems]);

  useEffect(() => {
    if (!country) {
      router.push('/');
    }
  }, [country]);

  return {
    cartItems,
    country,
    errorMessage,
    initialValues,
    isLoading,
    fieldProps,
    formik,
    handleContinue,
    schema,
    totalPrice,
  };
};
