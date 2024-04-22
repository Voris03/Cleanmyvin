import ChakraProvider from "./ChakraProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
