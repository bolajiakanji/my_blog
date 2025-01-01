import React, { useState } from "react";
import CertificatitionWrapper from "./CertificationWrapper";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";

const certs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const progressive_num = 3;

const Certificatition = () => {
  const [cert, setCert] = useState(certs.slice(0, progressive_num));
  const [showLess, setShowLess] = useState(false);

 // const reminder = certs.length % cert.length;
  //const quotent = Math.floor(certs.length / cert.length);

  const new_cert = cert.slice().length;

  const handleclick = () => {
    setCert(certs.slice(0, new_cert + progressive_num));
    setShowLess(true);
  };
  const handleshowlessclick = () => {
    setCert(certs.slice(0, new_cert - progressive_num));
  };

  return (
    <CertificatitionWrapper>
      {/* <Box style={{height: '1000px'}} className='h-screen'>Cerificatition</Box> */}
      <Flex gap="7" justify="center" className="flex-wrap mb-3 mt-7">
      {cert.map((cer) => (
        <Card
      className="sm:max-w-96 h-40  md:max-w-80 md:mx-0 lg:max-w-96 w-full ">
          {cer}
        </Card>
      ))}
        </Flex>
      <Box className="flex justify-center ">
        {certs.length > 4 && cert.length < certs.length && (
          <Button
            onClick={handleclick}
            className="rounded-s-md"
            variant="classic"
            radius="none"
          >
            See more
          </Button>
        )}
        {showLess && cert.length > progressive_num && (
          <Button
            onClick={handleshowlessclick}
            className="rounded-e-md"
            variant="classic"
            radius="none"
            color="purple"
          >
            See less
          </Button>
        )}
      </Box>
        <Text as="span" size="1" className="relative -top-7 ms-3 md:ms-16" onClick={() => setCert(certs.slice(0, 3))}>Hide all</Text>
    </CertificatitionWrapper>
  );
};

export default Certificatition;
