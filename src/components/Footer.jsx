import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscribe to get Updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email here...' border={'non'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                    <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}>
                        <Heading textAlign={'center'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='4xl' fontWeight='bold'>
                            Gaming Station
                        </Heading>
                        <Text>All Rights Reserved</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a target='blank' href="https://youtube.com/">Youtube</a>
                </Button>

                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a target='blank' href="https://instagram.com/">Instagram</a>
                </Button>

                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a target='blank' href="https://x.com/">Twitter</a>
                </Button>

            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer