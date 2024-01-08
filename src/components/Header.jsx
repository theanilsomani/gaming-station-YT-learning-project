import React from 'react'
import {Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'


const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

  return <>
    
    <Button zIndex={'overlay'} pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' padding={'0'}
    w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen}>
        <BiMenuAltLeft size={'20'}/>
    </Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='4xl' fontWeight='bold'>Gaming Station</DrawerHeader>
        <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <Link to={'/'}>Home</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <Link to={'/features'}>Features</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <Link to={'/how'}>Contact</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <Link to={'/features?category=free'}>Free Sample</Link>
                </Button>
            </VStack>

            <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                <Button onClick={onClose} colorScheme={'purple'}>
                    <Link to={'/login'}>LogIn</Link>
                </Button>

                <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                    <Link to={'/signup'}>SignUp</Link>
                </Button>
            </HStack>

        </DrawerBody>
    </DrawerContent>
    </Drawer>
  </>
}

export default Header