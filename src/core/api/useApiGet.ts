import { useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query';

export const useApiGet = ({ key, fn, options }: { key: any; fn: any; options: any }) =>
  useQuery({
    queryKey: key,
    queryFn: fn,
    ...options,
  });

export const useApiSend = ({
  fn,
  onSuccess,
  error,
  options = {},
}: {
  fn: any;
  onSuccess?: any;
  error?: any;
  invalidateKey?: any;
  options?: UseMutationOptions;
}) => {
  return useMutation({
    mutationFn: fn,
    onSuccess: data => {
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: error,
    retry: 2,
    ...options,
  });
};
