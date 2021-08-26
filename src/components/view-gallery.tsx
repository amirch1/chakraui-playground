import * as React from "react"
import {Wrap, WrapItem, AspectRatio, Image, Flex} from "@chakra-ui/react"
import user01 from "../assets/user01.jpeg";
import user02 from "../assets/user02.jpeg";
import user03 from "../assets/user03.jpeg";
import user04 from "../assets/user04.jpeg";
import user05 from "../assets/user05.jpeg";
import user06 from "../assets/user06.jpeg";
import user07 from "../assets/user07.jpeg";
import user08 from "../assets/user08.jpeg";
import user09 from "../assets/user09.jpeg";
import user10 from "../assets/user10.jpeg";
import user11 from "../assets/user11.jpeg";
import user12 from "../assets/user12.jpeg";

interface ViewGalleryProps {
    views: number;
    pagination: boolean;
}

export function ViewGallery(props: ViewGalleryProps)
{
    const views = [];
    for (let i = 0; i < props.views; i++) {
        if (i < 12) {
            views.push(i + 1);
        }
    }
    const users = [user01, user02, user03, user04, user05, user06, user07, user08, user09, user10, user11, user12];
    const rows = views.length > 8 ? 3 : 2;
    const width = 100 / Math.ceil(views.length / rows);
    const gap = props.pagination ? 200 : 108;

    return <Wrap w="100%" h="100%" spacing="0px" backgroundColor="black">
        {views.length === 1 && <WrapItem w="100%" h="100%" overflow="hidden">
            <AspectRatio w="100%" maxH={`calc(100vh - ${gap}px)`} ratio={1}>
                <Image src={user01} objectFit="cover"/>
            </AspectRatio>
        </WrapItem>}

        {views.length === 2 && <WrapItem w="50%" h="100%" overflow="hidden">
            <AspectRatio w="100%" h={`calc(100vh - ${gap}px)`} ratio={1}>
                <Image src={user01} objectFit="cover"/>
            </AspectRatio>
        </WrapItem>}
        {views.length === 2 && <WrapItem w="50%" h="100%" overflow="hidden">
            <AspectRatio w="100%" h={`calc(100vh - ${gap}px)`} ratio={1}>
                <Image src={user02} objectFit="cover"/>
            </AspectRatio>
        </WrapItem>}

        {views.length === 3 && <WrapItem w="50%" h="100%" overflow="hidden">
            <Flex direction="column" w="100%" h={`calc(100vh - ${gap}px)`}>
                <AspectRatio w="100%" h="50%" ratio={1}>
                    <Image src={user01} objectFit="cover"/>
                </AspectRatio>
                <AspectRatio w="100%" h="50%" ratio={1}>
                    <Image src={user03} objectFit="cover"/>
                </AspectRatio>
            </Flex>
        </WrapItem>}
        {views.length === 3 && <WrapItem w="50%" h="100%" overflow="hidden">
            <AspectRatio w="100%" h={`calc(100vh - ${gap}px)`} ratio={1}>
                <Image src={user02} objectFit="cover"/>
            </AspectRatio>
        </WrapItem>}

        {views.length > 3 && views.map((view, index) => {
                return <WrapItem key={index} w={`${width}%`} h="100%" overflow="hidden">
                        <AspectRatio w="100%" maxH={`calc((100vh - ${gap}px) / ${rows})`} height={`calc((100vh - ${gap}px) / ${rows})`} ratio={1}>
                            <Image src={users[index]} objectFit="cover"/>
                        </AspectRatio>
                </WrapItem>
            }
        )}


    </Wrap>
}
