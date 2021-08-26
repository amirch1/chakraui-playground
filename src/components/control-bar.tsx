import * as React from "react"
import {
    Flex, Image, Box
} from "@chakra-ui/react"
import logo from "../assets/logo.png";
import bar from "../assets/icons/bar.png";
import actions from "../assets/icons/actions.png";
import camera from "../assets/icons/camera.png";
import hand from "../assets/icons/hand.png";
import up from "../assets/icons/up.png";
import mic from "../assets/icons/mic.png";

interface ControlBarProps {
    onOpenMessages: () => void;
    pagination: boolean;
    hidden: boolean;
}

export function ControlBar(props: ControlBarProps) {
    return <Flex direction="column" alignItems="center" justifyContent="center" w="100%"
                 position={props.pagination ? 'relative' : 'absolute'} bottom={0} left={0}
                 bgGradient="linear(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)"  backgroundColor={props.pagination ? 'black' : ''}>
        {props.pagination && <Flex w="100px" h="20px" alignItems="flex-end" backgroundColor="black">
            <Box w="8px" h="8px" borderRadius="4px" marginLeft="4px" marginRight="4px" backgroundColor="white"></Box>
            <Box w="8px" h="8px" borderRadius="4px" marginLeft="4px" marginRight="4px" backgroundColor="white" opacity="0.5"></Box>
            <Box w="8px" h="8px" borderRadius="4px" marginLeft="4px" marginRight="4px" backgroundColor="white" opacity="0.5"></Box>
            <Box w="8px" h="8px" borderRadius="4px" marginLeft="4px" marginRight="4px" backgroundColor="white" opacity="0.5"></Box>
        </Flex>}
        <Flex alignItems="center" justifyContent="space-between" paddingLeft="16px" paddingRight="16px" w="100%" h="72px">
            <Image src={logo}/>
            <Flex w="240px" h="48px" marginLeft="120px" backgroundColor="gray.900" paddingLeft="16px" paddingRight="16px" borderRadius="24px" alignItems="center" justifyContent="space-around">
                <Image src={camera} cursor="pointer"/>
                <Image src={mic} cursor="pointer"/>
                <Image src={up} cursor="pointer"/>
                <Image src={hand} cursor="pointer"/>
                <Image src={actions} cursor="pointer"/>
            </Flex>
            <Image src={bar} cursor="pointer" onClick={props.onOpenMessages}/>
        </Flex>
    </Flex>
}
