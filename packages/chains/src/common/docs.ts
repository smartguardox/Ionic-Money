export const defaultDocs = (blockExplorerUrl: string, tokenAddress: string): string => {
  return `<p><b>How to acquire this token</b><p/><br />
  <p>Check out the token tracker for this asset in the <a href="${blockExplorerUrl}/token/${tokenAddress}" target="_blank">Official Block Explorer</a>, where you can access the token's site as well as market information</p>`;
};

export const ellipsisDocs = (poolAddress: string, poolName: string, tokenAddress: string) => {
  return `<p><b>How to acquire this token</b><p/><br />
  <p> 1. Head over to the <a href="https://ellipsis.finance//${poolAddress}" target="_blank">${poolName} Ellipsis Finance Pool</a> and click on "Add Liquidity".</p><br />
  <p> 2. You can then supply any of the underlying assets, and upon adding liquidity.</p>
  <p> You will get back the <a href="https://bscscan.com/address/${tokenAddress}" target="_blank">${poolName} pool LP tokens</a>.</p><br />
  <p> 3. Come back here and hit "MAX" to deposit them all in this pool.</p> 
  `;
};

export const ankrBNBDocs = (variant: string) => {
  return `<p><b>How to acquire this token</b><p/><br />
  <p>Head over to <a href="https://www.ankr.com/staking/stake/bnb/?token=${variant}" target="_blank">Ankr BNB Staking</a>, where you can acquire ${variant} by depositing BNB</p>`;
};

export const pancakeSwapDocs = (token0: string, token1: string, poolName: string, tokenAddress: string) => {
  return `<p><b>How to acquire this token</b><p/><br />
  <p> 1. Head to <a href="https://pancakeswap.finance/add/${token0}/${token1}" target="_blank">Pancakeswap</a>.</p><br />
  <p> 2. Ensure that the tokens are correct, and tap "Add Liquidity".</p>
  <p><b>NOTE:</b> you might have to convert between tokens and/or have to approve Pancakeswap to spend them. Finally, click on supply.</p>
  <p>You will get back <a href="https://bscscan.com/address/${tokenAddress}" target="_blank">Pancakeswap ${poolName} LP tokens</a> in your wallet.</p><br />
  <p> 3. Come back here and hit "MAX" to deposit them all in this pool.</p>
  `;
};

export const quickSwapDocs = (token0: string, token1: string, poolName: string, tokenAddress: string) => {
  return `<p><b>How to acquire this token</b><p/><br />
  <p> 1. Head to <a href="https://quickswap.exchange/#/pools">Quickswap</a>.</p><br />
  <p> 2. Input the token addresses -- token 1: ${token0} and  token 2: ${token1}".</p>
  <p><b>NOTE:</b> you might have to convert between tokens and/or have to approve QuickSwap to spend them.</p><br />
  <p> 3. Finally, click on supply.</p>
  <p>You will get back <a href="https://polygonscan.com/address/${tokenAddress}">Quickswap ${poolName} LP tokens</a> in your wallet.</p><br />
  <p> 4. Come back here and hit "MAX" to deposit them all in this pool.</p>
  `;
};

export const beamSwapDocs = (token0: string, token1: string, poolName: string, tokenAddress: string) => {
  return `<p><b>How to acquire this token</b><p/><br />
  <p> 1. Head to <a href="https://app.beamswap.io/exchange/add/${token0}/${token1}">BeamSwap</a> and supply the desired liquidity pairs.</p>
  <p><b>NOTE:</b> you might have to convert between tokens and/or have to approve BeamSwap to spend them.</p><br />
  <p> 2. You will get back <a href="https://moonbeam.moonscan.com/address/${tokenAddress}">BeamSwap ${poolName} LP tokens</a> in your wallet.</p><br />
  <p> 3. Come back here and hit "MAX" to deposit them all in this pool. </p>
  `;
};

export const beamSwapStableDocs = (poolName: string, tokenAddress: string) => {
  return `<p><b>How to acquire this token</b><p/><br />
  <p> 1. Head to <a href="https://app.beamswap.io/exchange/add/multi/${poolName}">BeamSwap</a> and supply the desired liquidity pairs.<p>
  <p><b>NOTE:</b> you might have to convert between tokens and/or have to approve BeamSwap to spend them.</p><br />
  <p> 2. You will get back <a href="https://moonbeam.moonscan.com/address/${tokenAddress}">BeamSwap ${poolName} Stable LP tokens</a> in your wallet.</p><br />
  <p> 3. Come back here and hit "MAX" to deposit them all in this pool. </p>
  `;
};

export const curveFinancePolygonDocs = (
  poolNumber: number,
  poolName: string,
  tokenAddress: string,
  isFactory = false
) => {
  return `<p><b>How to acquire this token</b><p/><br />
  <p> 1. Head over to the <a href="https://polygon.curve.fi${
    isFactory ? "/factory/" : "/"
  }${poolNumber}/deposit"> Curve ${poolName} Pool</a>.</p><br />
  <p> 2. You can then supply any of the underlying assets, and upon adding liquidity.</p> 
  <p>You will get back the <a href="https://polygonscan.com/address/${tokenAddress}"> Curve ${poolName} LP tokens</a>.</p><br />
  <p> 3. Come back back here and hit "MAX" to deposit them all in this pool.</p>
  `;
};

export const jarvisDocs = (v: string) => {
  return `<p><b>How to acquire this token</b><p/><br />
  <p>You can acquire this asset on the <a href="https://${v}-app.jarvis.exchange/" target="_blank">Jarvis Network</a> website</p>`;
};

export const arrakisDocs = (networkName: string, chainId: number, vaultAddress: string) => {
  return `<p><b>How to acquire this Arrakis Vault token</b><p/><br /><p> 1. Make sure you are connected to ${networkName} Network on your browser wallet </p><br />
  <p> 2. Head to the <a href="https://beta.arrakis.finance/vaults/${chainId}/${vaultAddress}/add" target="_blank">Arrakis Finance Vault</a> and
  deposit the desired amount of token pairs. <b>NOTE:</b> you might have to convert between tokens and/or have to approve Arrakis to spend them. </p><br />
  <p> 3. Click on "Deposit & Stake". This will credit your wallet with the Arrakis Vault Tokens</p><br />
  <p> 4. Come back back here and hit "MAX" to deposit them all in this pool.</p>
  `;
};
