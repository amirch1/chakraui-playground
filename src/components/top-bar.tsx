import * as React from "react"
import {
    Text,
    Flex,
    AspectRatio,
    Image,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper, NumberIncrementStepper
} from "@chakra-ui/react"
import user01 from "../assets/user01.jpeg";
import user02 from "../assets/user02.jpeg";
import user03 from "../assets/user03.jpeg";
import user04 from "../assets/user04.jpeg";

interface TopBarProps {
    users: number;
    onUsersChange: (users: number) => void;
}

export const TopBar = (props: TopBarProps) => (
    <Flex w="100%" h="108px" backgroundColor="black">
        <AspectRatio maxH="108px" w="192px" ratio={1}>
            <Image src={user01} objectFit="cover"/>
        </AspectRatio>
        <AspectRatio maxH="108px" w="192px" ratio={1}>
            <Image src={user02} objectFit="cover"/>
        </AspectRatio>
        <AspectRatio maxH="108px" w="192px" ratio={1}>
            <Image src={user03} objectFit="cover"/>
        </AspectRatio>
        <AspectRatio maxH="108px" w="192px" ratio={1}>
            <Image src={user04} objectFit="cover"/>
        </AspectRatio>
        <Flex color="white" direction="column" marginLeft="auto" padding="16px">
            <Flex alignItems="center">
                <NumberInput value={props.users} min={1} max={30} size="sm" w="80px" onChange={value => props.onUsersChange(parseInt(value))}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Text marginLeft="8px">Users</Text>
            </Flex>
        </Flex>

    </Flex>
)
