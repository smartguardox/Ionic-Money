/* eslint-disable @next/next/no-img-element */
'use client';
import type { Dispatch, SetStateAction } from 'react';

import { PopupMode } from '../popup/page';

export type SupplyRowsProps = {
  amount: string;
  asset: string;
  collateralApr: string;
  logo: string;
  membership: boolean;
  rewards: string;
  setPopupMode: Dispatch<SetStateAction<PopupMode | undefined>>;
  setSelectedSymbol: Dispatch<SetStateAction<string | undefined>>;
  supplyApr: string;
  utilization: string;
};

const SupplyRows = ({
  amount,
  asset,
  collateralApr,
  logo,
  membership,
  rewards,
  setSelectedSymbol,
  setPopupMode,
  supplyApr,
  utilization
}: SupplyRowsProps) => {
  return (
    <div
      className={`w-full hover:bg-graylite transition-all duration-200 ease-linear bg-grayUnselect rounded-xl mb-3 px-2  gap-x-1 lg:grid  grid-cols-8  py-4 text-xs text-white/80 font-semibold text-center items-center relative ${
        membership && 'border border-lime'
      }`}
    >
      {membership && (
        <span className="absolute top-[-9px] right-[-15px] px-2 text-darkone bg-lime rounded-lg">
          Collateral
        </span>
      )}

      <div className={`  flex gap-2 items-center justify-center mb-2 lg:mb-0`}>
        <img
          alt={asset}
          className="h-7"
          src={logo}
        />
        <h3 className={` `}>{asset}</h3>
      </div>
      <h3 className={`mb-2 lg:mb-0`}>
        <span className="text-white/40 font-semibold mr-2 lg:hidden text-right">
          AMOUNT:
        </span>
        {amount}
      </h3>
      <h3 className={`mb-2 lg:mb-0`}>
        <span className="text-white/40 font-semibold mr-2 lg:hidden text-right">
          COLLATERAL APR:
        </span>
        {collateralApr}
      </h3>
      <h3 className={`mb-2 lg:mb-0`}>
        <span className="text-white/40 font-semibold mr-2 lg:hidden text-right">
          SUPPLY APR:
        </span>
        {supplyApr}
      </h3>
      <h3 className={`mb-2 lg:mb-0`}>
        <span className="text-white/40 font-semibold mr-2 lg:hidden text-right">
          UTILIZATION:
        </span>
        {utilization}
      </h3>
      <h3 className={`mb-2 lg:mb-0`}>
        <span className="text-white/40 font-semibold mr-2 lg:hidden text-right">
          REWARDS:
        </span>
        {rewards}
      </h3>
      <div className={` col-span-2 flex items-center justify-center gap-3`}>
        <button
          className={`w-full uppercase rounded-lg bg-accent text-black py-1.5 px-3`}
          onClick={() => {
            setSelectedSymbol(asset);
            setPopupMode(PopupMode.WITHDRAW);
          }}
        >
          Withdraw
        </button>

        <button
          className={`w-full uppercase bg-lime rounded-lg text-black py-1.5 px-3`}
          onClick={() => {
            setSelectedSymbol(asset);
            setPopupMode(PopupMode.SUPPLY);
          }}
        >
          Manage
        </button>
      </div>
    </div>
  );
};

export default SupplyRows;
