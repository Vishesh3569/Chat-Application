import React from 'react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import {Text,Center, Container,Box } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react'





const Homepage = () => {
  

  const navigate=useNavigate();
  
   useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
   

    if (user) navigate("/chats");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);




  return (
    
    <Container maxW="xl" centerContent >
      <Box d="flex" m="40px 0 15px 0 " borderRadius="1g" borderWidth="1px" bg='tomato' w='100%' p={4} color='white' letterSpacing='wide'>
  <Center><Text fontSize="4xl" fontFamily="Work sans" >
    THis is the login Page
    </Text></Center>
</Box>
<Box bg="white" w="100%" p={4} borderRadius="1g" borderWidth="1px" color="black">
  <Tabs variant='soft-rounded' color="black" >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
     <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
    </Container>
   
  )
}



export default Homepage