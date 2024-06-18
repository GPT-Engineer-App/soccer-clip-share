import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Soccer Game Video Clips Sharing Web App</Heading>
      <Text fontSize="lg" mb={6}>
        This platform allows soccer enthusiasts to share and view memorable moments from soccer games. Users can register and authenticate using popular OAuth providers, ensuring a secure and straightforward login process. Once authenticated, users can upload video clips corresponding to specific moments in a soccer game, which are then displayed on a timeline-based interface for easy navigation.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <Text ml={2}>User registration and authentication using OAuth protocols (Google, Facebook, Twitter).</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Secure login process with session management.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Ability for users to upload video clips related to a selected soccer game.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Display a list of available games for selection.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Timeline-based interface displaying icons representing video clips for a selected game.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Playback functionality for video clips.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Simultaneous playback of multiple clips corresponding to the same moment.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Commenting and rating system for video clips.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Sharing functionality on social media platforms.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Notifications for new clips uploaded for followed games.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Users will be able to like and unlike clips.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>User profile management.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Basic search functionality to find games and clips.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Responsive design for mobile and desktop.</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;