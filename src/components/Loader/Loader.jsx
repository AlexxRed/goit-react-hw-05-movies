// import { LoadingText } from './Loader.styled';
import {Watch} from 'react-loader-spinner'

export const Loader = () => {
    return (
        <Watch
        color="#48ff00"
        height={80}
        width={80}
        wrapperStyle={{ margin: '0 auto' }}
        />
    )
}

    // return <LoadingText>loading...</LoadingText>