import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="/images/soccer-game.jpg" alt="Soccer Game" boxSize="300px" />
        <Text fontSize="2xl">Welcome to Soccer Game Video Clips Sharing Web App</Text>
        <Text>Share and view memorable moments from your favorite soccer games.</Text>
      </VStack>
    </Container>
  );
};

export default Index;