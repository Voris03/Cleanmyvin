"use client";

import { fetchLotClean } from "@/lib/server";
import { Button } from "@chakra-ui/react";

export function PaymentButton({ vin }: { vin: string }) {
  return (
    <Button
      mt={10}
      w={"full"}
      bg={"red.400"}
      color={"white"}
      rounded={"md"}
      _hover={{
        bg: "red.500",
      }}
      _focus={{
        bg: "red.500",
      }}
      onClick={() => fetchLotClean({ vin })}
    >
      Очистить историю
    </Button>
  );
}
