import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

import { CIconButton } from '@ui/components/shared/Button';

export const ExpanderArrow = ({
  getToggleExpandedHandler,
  isExpanded,
  canExpand,
}: {
  getToggleExpandedHandler: () => void;
  isExpanded: boolean;
  canExpand: boolean;
}) => {
  return (
    <CIconButton
      aria-label="detail View"
      alignSelf="flex-end"
      variant="_outline"
      onClick={(e) => {
        e.stopPropagation();
        getToggleExpandedHandler();
      }}
      icon={!isExpanded ? <ChevronDownIcon fontSize={30} /> : <ChevronUpIcon fontSize={30} />}
      borderRadius="50%"
      disabled={!canExpand ? true : false}
    />
  );
};
