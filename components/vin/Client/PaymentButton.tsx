"use client";

import { fetchLotClean } from "@/lib/server";
import { Button, useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";

export function PaymentButton({ vin }: { vin: string }) {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const onClick = useCallback(async () => {
    setIsLoading(true);

    try {
      const redirectUrl = await fetchLotClean({ vin });
      window.open(redirectUrl, "_blank");
    } catch (error) {
      toast({
        title: "Произошла ошибка",
        description: "Повторите позже.",
        status: "error",
        duration: 5_000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }, [vin]);

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
      isLoading={isLoading}
      onClick={onClick}
    >
      Очистить историю
    </Button>
  );
}
