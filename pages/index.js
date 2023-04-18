import Head from "next/head";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export default function Home() {
  const ScrollAnimation = () => {
    useEffect(() => {
      if (typeof window === "undefined") {
        return;
      }

      const scrollAnimationElm = document.querySelectorAll(".sa");

      const scrollAnimationFunc = () => {
        for (let i = 0; i < scrollAnimationElm.length; i++) {
          const triggerMargin = 350;
          if (
            window.innerHeight >
            scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
          ) {
            scrollAnimationElm[i].classList.add("show");
          }
        }
      };

      window.addEventListener("load", scrollAnimationFunc);
      window.addEventListener("scroll", scrollAnimationFunc);

      return () => {
        window.removeEventListener("load", scrollAnimationFunc);
        window.removeEventListener("scroll", scrollAnimationFunc);
      };
    }, []);

    return null;
  };

  return (
    <>
      <Head>
        <title>もののんのページ</title>
        <meta name="description" content="HP作成会用のサンプルページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display={{ base: "none", xl: "block" }}>
        <Box
          position={"fixed"}
          w="100vw"
          className="text"
          h="10vh"
          bg="gray.200"
          zIndex={"100"}
          opacity={"0.8"}
        >
          <Flex
            pt="6px"
            pb="6px"
            bg=""
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <Text
              letterSpacing="0.06rem"
              fontSize="28px"
              fontWeight="bold"
              mr="auto"
              ml="90px"
            >
              もののん
            </Text>
            <Flex mr="90px">
              <Text mr="40px" fontWeight={"bold"}>
                ABOUT
              </Text>
              <Text fontWeight={"bold"}>WORKS</Text>
            </Flex>
          </Flex>
        </Box>
        <Box h="100vh" w="100vw" className="blue">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            flexDirection={"column"}
            className="fadeIn"
          >
            <Box
              h="100px"
              w="100px"
              borderRadius="50%"
              opacity={"0.8"}
              mb="20px"
            ><Image
            src="/fakecat.jpeg"
            width={"900px"}
            opacity={"0.9"}
            borderRadius="50%"
          />
              
            </Box>
            <Text
              fontSize="35px"
              letterSpacing="0.08rem"
              fontWeight="bold"
              color="gray.800"
              className="text shadow"
            >
              もののん（ありよし）
            </Text>
          </Flex>
        </Box>
        <Box
          w="100vw"
          minH="830px"
          bg=""
          pt="140px"
          pb="320px"
          pr="120px"
          pl="120px"
          className="text"
        >
          <Box className="sa sa--up">
            <Text
              mb="120px"
              fontSize="80px"
              fontWeight={"bold"}
              letterSpacing={"0.2rem"}
            >
              もののんについて
            </Text>
            <Flex justifyContent={"center"} alignItems={"center"} h="100%">
              <Box mr="140px" w="520px">
                <Text
                  fontSize={"20px"}
                  letterSpacing={"0.06rem"}
                  lineHeight={"1.7em"}
                >
                  もののん（ありよし）
                  学部：環境情報学部（B1）
                  ゲーム：Europa Universalis IV,Hearts of Iron IV
                </Text>
              </Box>
              <Image
                src="/thumb-chihiro020.png"
                width={"600px"}
              />
            </Flex>
            <ScrollAnimation />
          </Box>
        </Box>
        <Box
          w="100vw"
          minH="830px"
          pt="140px"
          pb="320px"
          pr="120px"
          pl="120px"
          className="text"
          bg="gray.800"
          color="whiteAlpha.900"
        >
          <Box className="sa sa--up">
            <Text
              mb="120px"
              fontSize="80px"
              fontWeight={"bold"}
              letterSpacing={"0.2rem"}
            >
              SNS
            </Text>
            <Flex justifyContent={"center"} alignItems={"center"} h="100%">
              <Box mr="200px">
                <Flex
                  mb="55px"
                  justifyContent={""}
                  alignItems="center"
                  h="100%"
                >
                  <Image
                    alt=""
                    src="Unknown.png"
                    w="90px"
                  />
                  <Text
                    ml="50px"
                    mb="12px"
                    letterSpacing={"0.03rem"}
                    fontSize={"26px"}
                    fontWeight={""}
                  >
                    もののん#2972
                  </Text>
                </Flex>
                <Flex alignItems={"center"} h="100%">
                  <Image
                    alt=""
                    src="https://pics.prcm.jp/0a3e4ccca4b12/68217263/png/68217263.png"
                    w="86px"
                    borderRadius={"20%"}
                  />
                  <Text
                    letterSpacing={"0.03rem"}
                    ml="50px"
                    mb="12px"
                    fontSize={"26px"}
                    fontWeight={""}
                  >
                    @Mononon1002
                  </Text>
                </Flex>
              </Box>
              <Image
                src="thumb-chihiro041.png"
                alt=""
                w="600px"
              />
            </Flex>
          </Box>
        </Box>
        <Box h="200px">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            w="100vw"
            bg="blackAlpha.200"
          >
            <Text
              fontSize={"30px"}
              fontWeight={"bold"}
              className="text"
              letterSpacing={"0.05rem"}
              color="#333333"
            >
              もののん
            </Text>
          </Flex>
        </Box>
      </Box>

      {/** ここから下がスマホサイズの時に表示する要素たち */}
      {/** */}
      {/** */}
      <Box display={{ base: "none", xl: "block" }}>
        <Box
          position={"fixed"}
          w="100vw"
          className="text"
          h="10vh"
          bg="gray.200"
          zIndex={"100"}
          opacity={"0.8"}
        >
          <Flex
            pt="6px"
            pb="6px"
            bg=""
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <Text
              letterSpacing="0.06rem"
              fontSize="28px"
              fontWeight="bold"
              mr="auto"
              ml="90px"
            >
              もののん
            </Text>
            <Flex mr="90px">
              <Text mr="40px" fontWeight={"bold"}>
                ABOUT
              </Text>
              <Text fontWeight={"bold"}>WORKS</Text>
            </Flex>
          </Flex>
        </Box>
        <Box h="100vh" w="100vw" className="blue">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            flexDirection={"column"}
            className="fadeIn"
          >
            <Box
              h="100px"
              w="100px"
              borderRadius="50%"
              opacity={"0.8"}
              mb="20px"
            ><Image
            src="/fakecat.jpeg"
            width={"900px"}
            opacity={"0.9"}
            borderRadius="50%"
          />
              
            </Box>
            <Text
              fontSize="35px"
              letterSpacing="0.08rem"
              fontWeight="bold"
              color="gray.800"
              className="text shadow"
            >
              もののん（ありよし）
            </Text>
          </Flex>
        </Box>
        <Box
          w="100vw"
          minH="830px"
          bg=""
          pt="140px"
          pb="320px"
          pr="120px"
          pl="120px"
          className="text"
        >
          <Box className="sa sa--up">
            <Text
              mb="120px"
              fontSize="80px"
              fontWeight={"bold"}
              letterSpacing={"0.2rem"}
            >
              もののんについて
            </Text>
            <Flex justifyContent={"center"} alignItems={"center"} h="100%">
              <Box mr="140px" w="520px">
                <Text
                  fontSize={"20px"}
                  letterSpacing={"0.06rem"}
                  lineHeight={"1.7em"}
                >
                  もののん（ありよし）
                  学部：環境情報学部（B1）
                  ゲーム：Europa Universalis IV,Hearts of Iron IV
                </Text>
              </Box>
              <Image
                src="/thumb-chihiro020.png"
                width={"600px"}
              />
            </Flex>
            <ScrollAnimation />
          </Box>
        </Box>
        <Box
          w="100vw"
          minH="830px"
          pt="140px"
          pb="320px"
          pr="120px"
          pl="120px"
          className="text"
          bg="gray.800"
          color="whiteAlpha.900"
        >
          <Box className="sa sa--up">
            <Text
              mb="120px"
              fontSize="80px"
              fontWeight={"bold"}
              letterSpacing={"0.2rem"}
            >
              SNS
            </Text>
            <Flex justifyContent={"center"} alignItems={"center"} h="100%">
              <Box mr="200px">
                <Flex
                  mb="55px"
                  justifyContent={""}
                  alignItems="center"
                  h="100%"
                >
                  <Image
                    alt=""
                    src="Unknown.png"
                    w="90px"
                  />
                  <Text
                    ml="50px"
                    mb="12px"
                    letterSpacing={"0.03rem"}
                    fontSize={"26px"}
                    fontWeight={""}
                  >
                    もののん#2972
                  </Text>
                </Flex>
                <Flex alignItems={"center"} h="100%">
                  <Image
                    alt=""
                    src="https://pics.prcm.jp/0a3e4ccca4b12/68217263/png/68217263.png"
                    w="86px"
                    borderRadius={"20%"}
                  />
                  <Text
                    letterSpacing={"0.03rem"}
                    ml="50px"
                    mb="12px"
                    fontSize={"26px"}
                    fontWeight={""}
                  >
                    @Mononon1002
                  </Text>
                </Flex>
              </Box>
              <Image
                src="thumb-chihiro041.png"
                alt=""
                w="600px"
              />
            </Flex>
          </Box>
        </Box>
        <Box h="200px">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            w="100vw"
            bg="blackAlpha.200"
          >
            <Text
              fontSize={"30px"}
              fontWeight={"bold"}
              className="text"
              letterSpacing={"0.05rem"}
              color="#333333"
            >
              もののん
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
       