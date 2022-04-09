import {Bars} from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
        <Bars heigth="100" width="100" color="#00BFFF" ariaLabel="loading-indicator" />
    </div>
  )
}

export default Loading