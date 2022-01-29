import {
  SnackbarKey,
  VariantType,
  useSnackbar as useNotistack,
} from 'notistack';
import { useCallback } from 'react';

const useSnackBar = (): ((
  message?: string,
  variant?: VariantType,
) => SnackbarKey) => {
  const { enqueueSnackbar } = useNotistack();

  return useCallback(
    (message = 'Erro interno!', variant = 'error') => {
      return enqueueSnackbar(message, { variant });
    },
    [enqueueSnackbar],
  );
};

export default useSnackBar;
