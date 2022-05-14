import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image,
    Link, 
    useColorModeValue, 
    Button
} from "@chakra-ui/react"
import {ChevronRightIcon} from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {BioSection, BioYear} from '../components/bio'


const Page = () =>{
    return (
        <Container>
            <Box 
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} 
            p={3} 
            mb={6} 
            align="center"
            >
                Hello, I&apos;m a data scientist based in Mexico!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-tittle">
                        Luis Arellano
                    </Heading>
                    <p>Data scientist ( MSc / Actuary / Developer )</p>
                </Box>
                <Box 
                flexShrink={0}
                mt={{base:4, md:0}}
                ml = {{md:6}}
                align="center"
                >
                    <Image
                    borderColor={useColorModeValue('#202023','whiteAlpha.600')} //"whiteAlpha.600"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/luis.jpg"
                    alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Jkasdn dakjshd aksdh aksjdh aks dakjsh daks dhkasj dka sjdh ahkjs dkhajshd kajshd kjashd akjshd 
                    kasjhdkasjdhaksj hdkjas dkajshd kasjd haksjd haksjdha skjd hajksd haksjd {' '}
                    <NextLink href="/works/inkdrop"><Link>Inkdrop</Link></NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme={useColorModeValue('purple','orange')}>
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2013</BioYear>
                    University
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    MSc
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Freelance
                </BioSection>
            </Section>

            <Section delay={0.6}>
                <Heading as="h3" variant="section-title">
                    I ❤
                </Heading>
                <Paragraph>
                    Music, {'   '}<Link href="/works">Machine Learning</Link>
                </Paragraph>
            </Section>
        </Container>
    )
}
export default Page