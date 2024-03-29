import React from "react";
import { VStack, Input, Icon, NativeBaseProvider, Center, Box } from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export function SearchBar() {
    return (
        <Center>
            <VStack className="border-2 border-blue-200 rounded mb-2 " w="100%" maxW="350px" alignSelf="center" >
                <Input placeholder="Search by your doctor's or Docon Id" width="100%" height="45px"
                    placeholderTextColor={"black"} fontSize={16}
                    backgroundColor="white"
                    borderRadius="5" py="1" px="2" InputLeftElement={<Icon ml="2" mr="2" size="6" color="muted.900" as={<Ionicons name="ios-search" />} />}
                />
            </VStack>
        </Center>

    )
}
