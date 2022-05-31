import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Banner } from '@ui/components/shared/Banner';
import LoadingOverlay from '@ui/components/shared/LoadingOverlay';
import { useRari } from '@ui/context/RariContext';
import { useColors } from '@ui/hooks/useColors';
import { useIsSmallScreen } from '@ui/hooks/useIsSmallScreen';
import { Column } from '@ui/utils/chakraUtils';

const Layout = ({ children }: { children: ReactNode }) => {
  const { loading } = useRari();
  const { cPage } = useColors();
  const isMobile = useIsSmallScreen();

  return (
    <LoadingOverlay isLoading={loading}>
      <Column
        height="100%"
        flex={1}
        mainAxisAlignment="flex-start"
        crossAxisAlignment="center"
        bgColor={cPage.primary.bgColor}
      >
        <Banner
          text="Midas just launched, use at your own risk. "
          linkText="Read about Smart Contract Risk here."
          linkUrl="https://www.icba.org/newsroom/blogs/main-street-matters/2021/11/12/the-challenges-and-risks-of-smart-contracts"
          status="warning"
        ></Banner>
        <Container maxWidth="8xl">
          <Column
            width={isMobile ? '100%' : '96%'}
            height="100%"
            flex={1}
            mx="auto"
            mainAxisAlignment="center"
            crossAxisAlignment="stretch"
            position="relative"
          >
            {children}
          </Column>
        </Container>
      </Column>
    </LoadingOverlay>
  );
};

export default Layout;
