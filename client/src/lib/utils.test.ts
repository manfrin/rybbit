import { afterEach, expect, test } from "vitest";
import { useStore } from "./store";
import { formatter } from "./utils";

afterEach(() => useStore.setState({ compactFrom: 1000 }));

test("formatter abbreviates from 1,000 by default", () => {
  expect(formatter(999)).toBe("999");
  expect(formatter(1234)).toBe("1.2K");
});

test("formatter shows numbers below compactFrom in full", () => {
  useStore.setState({ compactFrom: 10_000 });
  expect(formatter(2.34)).toBe("2.3");
  expect(formatter(1234)).toBe("1,234");
  expect(formatter(-1234)).toBe("-1,234");
  expect(formatter(9999)).toBe("9,999");
  expect(formatter(12345)).toBe("12K");
});
