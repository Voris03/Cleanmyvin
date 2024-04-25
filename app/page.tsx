import { Metadata } from "next";
import Hero from "components/Hero";
import Landing from "@/components/Landing";

export const metadata: Metadata = {
  title: "Landing Page | Checkusavin",
  other: {
    verification: "db116b39f7a3ac5366079b1d9fe249a5",
    "google-site-verification": "XCrt0xYn-HvSVSFD-Nli_Xwopd0win1VZ2iaseOpeNo",
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <Landing />
    </>
  );
}
