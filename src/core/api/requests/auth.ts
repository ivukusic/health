import api from '../axios';

export const mutationSignIn = (data: any) => api.post(`/auth/sign-in`, data);

export const mutationSignUp = (data: any) => api.post(`/auth/sign-up`, data);

export const mutationSendCart = (data: any) =>
  api.get(`/57160357-9408-469c-aefc-298346364706`, data);
