import { MidasSdk } from '@midas-capital/sdk';
import { useQuery } from '@tanstack/react-query';

import { useMultiMidas } from '@ui/context/MultiMidasContext';

export const useSdk = (chainId?: number) => {
  const { getSdk } = useMultiMidas();

  return useQuery<MidasSdk | undefined>(
    ['useSdk', chainId],
    () => {
      if (chainId) {
        return getSdk(chainId);
      }
    },
    { enabled: !!chainId }
  );
};
