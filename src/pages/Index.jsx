import React, { useState } from "react";
import { Box, Heading, VStack, FormControl, FormLabel, Select, Input, Checkbox, Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Index = () => {
  const [location, setLocation] = useState("");
  const [disease, setDisease] = useState("");
  const [severity, setSeverity] = useState("");
  const [extent, setExtent] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [registrations, setRegistrations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRegistration = {
      location,
      disease,
      severity,
      extent,
      confirmed,
    };
    setRegistrations([...registrations, newRegistration]);
    setLocation("");
    setDisease("");
    setSeverity("");
    setExtent("");
    setConfirmed(false);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Fish Disease Registration
      </Heading>

      <VStack as="form" onSubmit={handleSubmit} spacing={4} align="stretch">
        <FormControl id="location">
          <FormLabel>Location</FormLabel>
          <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </FormControl>

        <FormControl id="disease">
          <FormLabel>Disease</FormLabel>
          <Select value={disease} onChange={(e) => setDisease(e.target.value)} required>
            <option value="">Select a disease</option>
            <option value="Disease 1">Disease 1</option>
            <option value="Disease 2">Disease 2</option>
            <option value="Disease 3">Disease 3</option>
          </Select>
        </FormControl>

        <FormControl id="severity">
          <FormLabel>Severity</FormLabel>
          <Input type="text" value={severity} onChange={(e) => setSeverity(e.target.value)} required />
        </FormControl>

        <FormControl id="extent">
          <FormLabel>Extent</FormLabel>
          <Input type="text" value={extent} onChange={(e) => setExtent(e.target.value)} required />
        </FormControl>

        <FormControl id="confirmed">
          <Checkbox isChecked={confirmed} onChange={(e) => setConfirmed(e.target.checked)}>
            Confirmed
          </Checkbox>
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Register
        </Button>
      </VStack>

      <Heading as="h2" size="lg" mt={8} mb={4}>
        Disease Registrations
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Location</Th>
            <Th>Disease</Th>
            <Th>Severity</Th>
            <Th>Extent</Th>
            <Th>Confirmed</Th>
          </Tr>
        </Thead>
        <Tbody>
          {registrations.map((registration, index) => (
            <Tr key={index}>
              <Td>{registration.location}</Td>
              <Td>{registration.disease}</Td>
              <Td>{registration.severity}</Td>
              <Td>{registration.extent}</Td>
              <Td>{registration.confirmed ? "Yes" : "No"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
