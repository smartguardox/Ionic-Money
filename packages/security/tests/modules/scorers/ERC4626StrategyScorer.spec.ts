import { SupportedChains } from "@midas-capital/types";

import { SecurityBase } from "../../../src/index";
import * as StrategyModule from "../../../src/strategy";
import { expect } from "../../globalTestHook";

describe("Oracle", () => {
  const Strategy = StrategyModule.withErc4626StrategyScorer(SecurityBase);
  let strategyBsc: InstanceType<typeof Strategy>;
  let strategyPolygon: InstanceType<typeof Strategy>;
  let strategyMoonbeam: InstanceType<typeof Strategy>;

  beforeEach(() => {
    strategyBsc = new Strategy(SupportedChains.bsc, null);
    strategyPolygon = new Strategy(SupportedChains.polygon, null);
    strategyMoonbeam = new Strategy(SupportedChains.moonbeam, null);
  });

  describe("getStrategyRating", () => {
    it.only("should fetch strat rating for bsc", async () => {
      for (const [address, strat] of Object.entries(strategyBsc.chainConfig.deployedPlugins)) {
        const rating = await strategyBsc.getStrategyRating(address);
        console.log(`Rating for strategy: ${strat.name} is ${rating}`);
        expect(rating).to.be.greaterThan(0);
      }
    });
    it.only("should fetch strat rating for polygon", async () => {
      for (const [address, strat] of Object.entries(strategyPolygon.chainConfig.deployedPlugins)) {
        const rating = await strategyPolygon.getStrategyRating(address);
        console.log(`Rating for strategy: ${strat.name} is ${rating}`);
        expect(rating).to.be.greaterThan(0);
      }
    });
    it.only("should fetch strat rating for moonbeam", async () => {
      for (const [address, strat] of Object.entries(strategyMoonbeam.chainConfig.deployedPlugins)) {
        const rating = await strategyMoonbeam.getStrategyRating(address);
        console.log(`Rating for strategy:  ${strat.name} is ${rating}`);
        expect(rating).to.be.greaterThan(0);
      }
    });
  });
});
