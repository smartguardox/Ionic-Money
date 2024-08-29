'use client';
import type { MutableRefObject } from 'react';

import { chainsArr } from '@ui/constants/index';
import { formatEther } from 'viem';

interface IProps {
  close: () => void;
  open: boolean;
  bridgeref: MutableRefObject<never>;
  mock?: {
    amount: bigint;
    hash: string;
    approvalHash: string;
    fromChain: string;
    toChain: string;
    status?: boolean;
  };
}

export default function TxPopup({
  close,
  open,
  bridgeref,
  mock = {
    amount: BigInt(0),
    hash: '0x1234567890abcdef1234567890abcdef12345678',
    fromChain: '',
    toChain: '',
    approvalHash: ''
  }
}: IProps) {
  // const {
  //   componentRef: refto,
  //   isopen,
  //   toggle
  // } = useOutsideClick();
  // const { address, isConnected } = useAccount();

  return (
    <div
      className={` z-50 fixed top-0 right-0 w-full h-screen  bg-black/35 ${
        open ? 'flex' : 'hidden'
      } items-center justify-center transition-opacity duration-300 overflow-y-auto animate-fade-in animated backdrop-blur-sm`}
    >
      <div
        className={`md:w-[45%] w-[80%] h-max relative flex flex-col items-center justify-cente `}
        ref={bridgeref}
      >
        <div
          className={`bg-grayUnselect w-full p-4 flex flex-col gap-y-2 rounded-md`}
        >
          <div className={`  mb-5 text-xl  flex items-center justify-between`}>
            <span>Bridging</span>
            <img
              alt="close"
              className={` h-5 cursor-pointer `}
              onClick={() => close()}
              src="/img/assets/close.png"
            />
          </div>
          <div className={`w-full items-center justify-start flex `}>
            <span className={`text-xs`}>Amount</span>
            <div className={`ml-auto flex gap-2`}>
              <span className={`text-xs text-white/50`}>{mock?.amount}</span>
              <img
                alt="close"
                className={` h-4 w-4 `}
                src="/img/logo/ION.png"
              />
              <span className={`text-xs text-white/50`}>ION</span>
            </div>
          </div>
          <div className={`w-full items-center justify-start flex `}>
            <span className={`text-xs`}>Received</span>
            <div className={`ml-auto flex gap-2`}>
              <span className={`text-xs text-white/50`}>
                {(
                  Number(formatEther(mock?.amount)) -
                  Number(formatEther(mock?.amount)) * 0.01
                ).toLocaleString('en-US', {
                  maximumFractionDigits: 3
                })}
              </span>
              <img
                alt="close"
                className={` h-4 w-4 `}
                src="/img/logo/ION.png"
              />
              <span className={`text-xs text-white/50`}>ION</span>
            </div>
          </div>
          <div className={`w-full items-center justify-start flex `}>
            <span className={`text-xs`}>Networks</span>
            <div className={`ml-auto flex items-center gap-2`}>
              <span className={`text-xs text-white/50`}>
                {chainsArr[+mock?.fromChain]}
              </span>
              {'->'}
              <span className={`text-xs text-white/50`}>
                {chainsArr[+mock?.toChain]}
              </span>
            </div>
          </div>
          <div className={`w-full items-center justify-start flex `}>
            <span className={`text-xs`}>Approval Hash</span>
            <div className={`ml-auto`}>
              <a
                target="_blank"
                href={`https://layerzeroscan.com/tx/${mock?.approvalHash}`}
                className={`text-xs text-white/50`}
              >
                {mock?.approvalHash}
              </a>
            </div>
          </div>
          <div className={`w-full items-center justify-start flex `}>
            <span className={`text-xs`}>Transaction Hash</span>
            <div className={`ml-auto`}>
              <a
                target="_blank"
                href={`https://layerzeroscan.com/tx/${mock?.hash}`}
                className={`text-xs text-white/50`}
              >
                {mock?.hash}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
