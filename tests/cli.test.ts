import { expect, test } from "bun:test";
import { ask } from "../src/cli";


test("Ask", async () => {
  ask("What are the best practices of functional programming")
}, 180_000);