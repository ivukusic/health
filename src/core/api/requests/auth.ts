import api from '../axios';

export const mutationSignIn = (data: any) => api.post(`/auth/sign-in`, data);

export const mutationSignUp = (data: any) => api.post(`/auth/sign-up`, data);
