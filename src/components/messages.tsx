import * as React from "react"
import {Flex, Text, CloseButton, Tabs, TabList, Tab} from "@chakra-ui/react"

interface MessagesProps {
    open: boolean;
    onClosePanel: () => void
}

export const Messages = (props: MessagesProps) => (
  <Flex w={props.open ? '310px' : '0px'} p={props.open ? '16px' : '0px'} overflow="hidden" transition="width 200ms" direction="column">
      <Flex>
          <Text color="gray.300">Messages</Text>
          <CloseButton marginLeft="auto" color="gray.300" size="sm" onClick={props.onClosePanel}/>
      </Flex>
      <Tabs color="white" size="sm" marginTop="16px">
          <TabList>
              <Tab _selected={{borderColor: "blue.500"}} paddingLeft="8px" paddingRight="8px">Room</Tab>
              <Tab _selected={{borderColor: "blue.500"}} paddingLeft="8px" paddingRight="8px">Private</Tab>
              <Tab _selected={{borderColor: "blue.500"}} paddingLeft="8px" paddingRight="8px">Moderators</Tab>
              <Tab _selected={{borderColor: "blue.500"}} paddingLeft="8px" paddingRight="8px">Q&A</Tab>
          </TabList>
      </Tabs>
  </Flex>
)
