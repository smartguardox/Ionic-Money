import { sendTransactionToSafeLiquidator } from './index';
import { Fuse } from '@midas-capital/sdk';
import { Wallet } from 'ethers';

export default async function liquidateUnhealthyBorrows(fuse: Fuse) {
  const signer = new Wallet(process.env.ETHEREUM_ADMIN_PRIVATE_KEY!, fuse.provider);
  const potentialLiquidations = await fuse.getPotentialLiquidations(signer);
  if (potentialLiquidations.length == 0) {
    console.log('No liquidatable pools found. Timing out and re-staring...');
  }
  for (const poolLiquidations of potentialLiquidations) {
    if (poolLiquidations.liquidations.length > 0) {
      for (const liquidation of poolLiquidations.liquidations) {
        try {
          await sendTransactionToSafeLiquidator(
            fuse,
            liquidation.method,
            liquidation.args,
            liquidation.value
          );
        } catch (error) {
          throw 'Error sending sendTransactionToSafeLiquidator transaction: ' + error;
        }
      }
    }
  }
}
