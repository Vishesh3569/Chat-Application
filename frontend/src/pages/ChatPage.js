import { Box } from "@chakra-ui/react";
import {ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/Authentication/miscellaneous/SideDrawer";
import MyChats from "../components/Authentication/miscellaneous/MyChats";
import ChatBox from "../components/Authentication/miscellaneous/ChatBox";
import { useState } from "react";

const ChatPage = () => {
    
 const {user} = ChatState();
 const [fetchAgain,setFetchAgain] = useState(false);

  
  return <div style={{width:"100%"}}> 
    { user && <SideDrawer/>}
   
    <Box display="flex"
    justifyContent="space-between"
    p="10px"
    w="100%"
    h="92vh"
    >
      { user && <MyChats fetchAgain={fetchAgain}  />}
      { user &&<ChatBox fetchAgain={fetchAgain}  setFetchAgain={setFetchAgain}/>}
    </Box>
    </div>
  
}

export default ChatPage