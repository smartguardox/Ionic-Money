import doetenv from "dotenv";
doetenv.config({ path: "packages/bots/liquidator/.env" });

const config = {
  environment: process.env.NODE_ENV ?? "development",
  logLevel: process.env.LOG_LEVEL ?? "info",
  chainId: parseInt(process.env.TARGET_CHAIN_ID ?? "34443", 10),
  rpcUrl: process.env.WEB3_HTTP_PROVIDER_URL ?? "https://mainnet.mode.network/",
  adminPrivateKey: process.env.ETHEREUM_ADMIN_PRIVATE_KEY ?? "",
  adminAccount: process.env.ETHEREUM_ADMIN_ACCOUNT ?? "",
  excludedComptrollers: process.env.EXCLUDED_COMPTROLLERS ? process.env.EXCLUDED_COMPTROLLERS.split(",") : [],
  discordWebhookUrl: process.env.DISCORD_WEBHOOK_URL ?? "",
  PER_discordWebhookUrl: process.env.PER_DISCORD_WEBHOOK_URL ?? "",
  sendgridApiKey: process.env.SENDGRID_API_KEY ?? "",
  sendgridEmailTo: process.env.SENDGRID_EMAIL_TO ?? "dev@ionic.money",
  chainName: process.env.CHAIN_NAME ?? "mode",
  expressRelayEndpoint: process.env.RELAY_ENDPOINT ?? "https://pyth-express-relay-mainnet.asymmetric.re/",
};

export enum EXCLUDED_ERROR_CODES {
  NETWORK_ERROR,
  SERVER_ERROR,
}


export default config;
