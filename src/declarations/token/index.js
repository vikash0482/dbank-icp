import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "./service.did.js";

export { idlFactory } from "./service.did.js";

export const canisterId = "xjg36-kiaaa-aaaad-agswq-cai";

export const createActor = (canisterId, options = {}) => {
  const agent = options.agent || new HttpAgent({
    ...options.agentOptions
  });

  if (process.env.DFX_NETWORK !== "ic") {
    agent.fetchRootKey().catch(console.error);
  }

  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...(options ? options.actorOptions : {}),
  });
};

export const token = createActor(canisterId);
