// import { Container } from './styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const LoadingCardList = () => {
  return (
    <>
      <Skeleton
        style={{ width: '340px', height: '340px', margin: '10px 7px' }}
      ></Skeleton>
      <Skeleton
        style={{ width: '340px', height: '340px', margin: '10px 7px' }}
      ></Skeleton>
      <Skeleton
        style={{ width: '340px', height: '340px', margin: '10px 7px' }}
      ></Skeleton>
      <Skeleton
        style={{ width: '340px', height: '340px', margin: '10px 7px' }}
      ></Skeleton>
      <Skeleton
        style={{ width: '340px', height: '340px', margin: '10px 7px' }}
      ></Skeleton>
      <Skeleton
        style={{ width: '340px', height: '340px', margin: '10px 7px' }}
      ></Skeleton>
    </>
  )
}
