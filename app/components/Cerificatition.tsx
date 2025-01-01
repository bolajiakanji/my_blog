import React, { useState } from "react";
import CertificatitionWrapper from "./CertificationWrapper";
import { Box, Button, Text } from "@radix-ui/themes";

const certs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const progressive_num = 3;

const Certificatition = () => {
  const [cert, setCert] = useState(certs.slice(0, progressive_num));
  const [showLess, setShowLess] = useState(false);

  const reminder = certs.length % cert.length;
  const quotent = Math.floor(certs.length / cert.length);

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
      <Box className="w-full mt-5  max-w-96 px-3 mx-auto">
      {cert.map((cer) => (
        <Box className="h-32 flex gap-5 mb-5  bg-orange-400 mx-auto">
          {cer}
        </Box>
      ))}
      <button className="flex justify-center w-full retlative z-20 " >
        {certs.length > 4 && cert.length < certs.length && (
          <Button
            onClick={handleclick}
            className=""
            variant="classic"
            radius="none"
          >
            see more
          </Button>
        )}
        {showLess && cert.length > progressive_num && (
          <Button
            onClick={handleshowlessclick}
            variant="classic"
            radius="none"
            color="purple"
          >
            show less
          </Button>
        )}
      </button>
        <Text as="p" size="1" className="relative right-0 -top-7 inline-block  z-1 ">Hide all</Text>
        </Box>
    </CertificatitionWrapper>
  );
};

export default Certificatition;
