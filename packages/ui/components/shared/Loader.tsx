import { Box } from '@chakra-ui/react';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

function Loader({ width }: { width?: string }) {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start((i) => ({
      opacity: [0, 1, 1, 1, 1, 0],
      pathLength: [0, 1, 1, 1, 1, 0],
      fillOpacity: [0, 0, 1, 1, 0, 0],
      transition: {
        delay: i * 0.2,
        repeatDelay: 0.5,
        repeatType: 'reverse',
        ease: 'easeIn',
        repeat: Infinity,
        duration: 2,
      },
    }));
  }, [controls]);

  return (
    <Box width={width ? width : '140px'}>
      <motion.svg fill="#BCAC83" width="140px" height="125px">
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 1,
          }}
          custom={0}
          animate={controls}
          stroke="#BCAC83"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m14.9 0.4h110.8c7.5 0 13.5 5 14.7 12.4 1 6-2.1 12.3-7.7 15.3s-12.5 2-16.9-2.3c-2.2-2.1-2.4-5.2-0.4-7.4 1.9-2.1 5-2.3 7.3-0.4 1.4 1.2 2.9 1.7 4.7 1s2.8-2.4 2.7-4.4c-0.1-1.8-1.5-3.4-3.3-3.8-0.5-0.1-1-0.1-1.5-0.1h-109.7c-1.5 0-2.9 0.4-3.9 1.6-1.4 1.7-1.3 4 0.2 5.6s3.9 1.8 5.7 0.5c0.8-0.6 1.6-1.3 2.6-1.6 2.3-0.6 4.7 0.4 5.9 2.4s0.9 4.4-0.8 6.2c-5.1 5.3-14.2 5.7-19.8 0.8-6.2-5.5-7-14.2-1.5-20.8 2.8-3.3 6.5-5 10.9-5z"
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 1,
          }}
          custom={0}
          animate={controls}
          stroke="#BCAC83"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m75.7 83.4v31.3c0 1.8-0.4 3.3-1.8 4.6-1.5 1.3-3.2 1.6-5 1.1-1.8-0.6-3-1.8-3.5-3.7-0.2-0.9-0.2-1.8-0.2-2.7v-61.8c0-1.9 0-1.9-1.9-1.9h-8.5c-1.8 0-1.8 0-1.8 1.9v38.7c0 1.2-0.1 2.4-0.7 3.5-1 1.8-3 3-5 2.8-2.1-0.2-4-1.7-4.5-3.8-0.2-0.8-0.3-1.6-0.3-2.3v-45.2c0-3.9 2.1-6 5.9-6 14.7 0 29.4 0.1 44.1 0 3.5 0 6 2.4 6 6-0.1 15.2 0 30.4 0 45.5 0 4-3.3 6.7-6.8 5.6-2.2-0.7-3.6-2.7-3.7-5.4-0.1-2.6 0-5.2 0-7.9v-31.4c0-2 0-2-2-2h-8.8c-1.2 0-1.5 0.4-1.5 1.5 0.1 10.5 0 21 0 31.6z"
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 1,
          }}
          custom={0}
          animate={controls}
          stroke="#BCAC83"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m70.5 30.8h-31.2c-3.8 0-6.3-3.6-5-7.1 0.8-2 2.6-3.2 5-3.2h62.4c3.8 0 6.2 3.5 5 7-0.8 2.1-2.7 3.4-5.2 3.4-10.3-0.1-20.7-0.1-31-0.1z"
        />
        {/* <motion.path
          initial={{
            opacity: 0,
            pathLength: 1,
          }}
          custom={1}
          animate={controls}
          stroke="#BCAC83"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m175.1 64v-16.7c0-3.1 1.3-4.5 4.4-4.5h33c3.2 0 4.7 1.5 4.7 4.7v32.8c0 0.7-0.1 1.3-0.3 2-0.6 1.7-2 2.6-3.8 2.5-1.7-0.1-3-1.4-3.2-3.1-0.1-0.5 0-1.1 0-1.6v-28.3c0-1.7 0-1.7-1.7-1.7h-7.6c-1.1 0-1.3 0.4-1.3 1.4 0.2 9 0.2 18 0 27 0 0.6 0 1.2 0.1 1.9 0.3 2.5-1.1 4.3-3.4 4.4-2.2 0.1-3.8-1.5-3.8-4v-29.2c0.1-1.1-0.3-1.6-1.5-1.5-2.3 0.1-4.7 0.1-7 0-1.1 0-1.5 0.4-1.5 1.5 0.1 5.5 0 11.1 0 16.6v12.7c0 2.4-1.4 3.9-3.6 3.9s-3.6-1.5-3.6-3.9c0.1-5.7 0.1-11.3 0.1-16.9z"
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 1,
          }}
          custom={2}
          animate={controls}
          stroke="#BCAC83"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m288 63.7v17.1c0 1.5-0.5 2.7-1.9 3.4-1.3 0.7-2.6 0.6-3.8-0.2-1.3-0.9-1.6-2.3-1.6-3.7v-33.2c0-2.5 1.3-4 3.4-4.2 2.4-0.2 4 1.3 4 3.7-0.1 5.8-0.1 11.5-0.1 17.1z"
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 1,
          }}
          custom={3}
          animate={controls}
          stroke="#BCAC83"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m351.6 77.5v-30.9c0-1.6 0.4-2.9 1.9-3.6s2.8-0.4 4.1 0.5c8.4 5.6 16.8 11.2 25.1 16.7 3.2 2.1 3.2 4.7 0 6.9-8.1 5.4-16.1 10.8-24.2 16.2-0.6 0.4-1.3 0.8-1.9 1.1-2.4 1.2-4.8-0.2-5-2.9-0.1-1.3 0-2.7 0-4zm7.5-23v18.4c0 0.3-0.2 0.8 0.2 1 0.3 0.2 0.6-0.2 0.9-0.4 4.6-3 9.1-6.1 13.7-9.1 0.9-0.6 0.7-0.9 0-1.4-4.6-3-9.2-6-13.7-9.1-0.3-0.2-0.5-0.5-0.9-0.3-0.3 0.2-0.2 0.6-0.2 0.9z"
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 1,
          }}
          custom={4}
          animate={controls}
          stroke="#BCAC83"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m469.8 85h-16.9c-2.5 0-4-1.2-4.3-3.2-0.1-1.2 0.4-2.3 0.9-3.3 1.2-2.3 2.4-4.6 3.5-6.9 4.5-8.9 9-17.7 13.5-26.6 1.3-2.5 3.7-3.2 5.6-1.6 0.5 0.4 0.8 0.9 1 1.4 5.7 11.4 11.4 22.8 17 34.1 1.7 3.4 0.2 6-3.7 6-5.5 0.1-11.1 0.1-16.6 0.1zm0.1-30.2c-0.4 0.1-0.5 0.5-0.6 0.8-3.5 7-7.1 13.9-10.6 20.9-0.5 0.9 0 1 0.7 1h20.7c1.1 0 1.2-0.3 0.7-1.2-3.5-6.8-6.9-13.7-10.3-20.5-0.2-0.4-0.2-0.8-0.6-1z"
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 1,
          }}
          custom={5}
          animate={controls}
          stroke="#BCAC83"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m579.3 72.9c-0.5 1.4-1.4 2.3-2.6 3-4.9 2.8-9.9 5.5-14.8 8.3-1.4 0.8-2.8 1-4.2 0-2.2-1.7-2.1-4.5 0.3-5.9 3.5-2.1 7-4 10.5-6 1.3-0.7 1.3-0.7 0.3-1.8-4.2-4.2-8.4-8.3-12.6-12.5-2.5-2.5-2.2-4.6 0.8-6.4 4.9-2.8 9.8-5.6 14.8-8.4 2.5-1.4 5-0.5 5.7 2 0.5 1.7-0.3 3.2-2.1 4.2-3.3 1.9-6.6 3.7-9.9 5.6-1.5 0.8-1.5 0.9-0.3 2 4.4 4 8.5 8.4 12.7 12.5 0.7 0.7 1 1.5 1.4 2.3v1.1z"
        /> */}
      </motion.svg>
    </Box>
  );
}

export default Loader;
