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
  onError,
  options = {},
}: {
  fn: any;
  onSuccess?: any;
  onError?: any;
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
    onError,
    retry: 2,
    ...options,
  });
};
