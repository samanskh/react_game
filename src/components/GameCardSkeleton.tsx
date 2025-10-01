import React from 'react'
import {Card, CardBody, Skeleton, SkeletonText} from '@chakra-ui/react'
const GameCardSkeleton = () => {
  return (
   <Card.Root width={"320px"} borderRadius={10} overflow={'hidden'}>
    <Skeleton height={"200px"}></Skeleton>
    <CardBody>
        <SkeletonText/>
    </CardBody>
   </Card.Root>
  )
}

export default GameCardSkeleton