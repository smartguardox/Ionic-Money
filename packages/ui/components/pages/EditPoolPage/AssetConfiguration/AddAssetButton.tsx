import { Button } from '@chakra-ui/react';
import React from 'react';

import { useIsEditableAdmin } from '@ui/hooks/fuse/useIsEditableAdmin';
import { useIsUpgradeable } from '@ui/hooks/fuse/useIsUpgradable';

const AddAssetButton = ({
  openAddAssetModal,
  comptrollerAddress,
  poolChainId,
}: {
  openAddAssetModal: () => void;
  comptrollerAddress: string;
  poolChainId: number;
}) => {
  const isUpgradeable = useIsUpgradeable(comptrollerAddress, poolChainId);
  const isEditableAdmin = useIsEditableAdmin(comptrollerAddress, poolChainId);

  return isUpgradeable ? (
    <Button onClick={openAddAssetModal} isDisabled={!isEditableAdmin}>
      Add Asset
    </Button>
  ) : null;
};

export default AddAssetButton;