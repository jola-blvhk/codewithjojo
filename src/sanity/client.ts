import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "4frvq8zk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
