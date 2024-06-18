import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <Box bg="blue.500" px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold">Home</Link>
      </Box>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/about" color="white" mx={2}>About</Link>
        <Link as={RouterLink} to="/contact" color="white" mx={2}>Contact</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;