import Link from "next/link";
import Image from "next/Image";
import {Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img{
    // transform: rotate(20deg);
    transform: scaleX(-1);
}
`
const Logo = () => {
    const footPrintImg = `/images/fibonacci${useColorModeValue('','-dark')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={30} height={20} alt="logo" />
                    <Text 
                        color={useColorModeValue('gray.800','whiteAlpha.900')}
                        fontFamily = 'M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={3}
                    >
                        Luis Arellano
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;