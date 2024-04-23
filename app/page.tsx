import { Metadata } from "next";
import Hero from "components/Hero";
import Landing from "@/components/Landing";

export const metadata: Metadata = {
  title: "Landing Page | Checkusavin",
  other: {
    verification: "00a03ec6533ca7f5c644d198d815329c",
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
