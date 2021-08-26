import * as React from "react";
import {Box, Flex} from "@chakra-ui/react";
import {Messages} from "./messages";
import {useState} from "react";
import {TopBar} from "./top-bar";
import {ViewGallery} from "./view-gallery";
import {ControlBar} from "./control-bar";

export function MainView() {
    const [messagesOpen, setMessagesOpen] = useState(true);
    const [users, setUsers] = useState(1);

    return <Flex w="100%" h="100vh">
        <Flex w="100%" h="100%" direction="column" position="relative">
            <TopBar users={users} onUsersChange={value => setUsers(value)}></TopBar>
            <ViewGallery pagination={users > 12} views={users}></ViewGallery>
            <ControlBar onOpenMessages={() => setMessagesOpen(true)} pagination={users > 12}></ControlBar>
        </Flex>
        <Box h="100%" backgroundColor="gray.900">
            <Messages open={messagesOpen} onClosePanel={() => setMessagesOpen(false)}></Messages>
        </Box>
    </Flex>
}
