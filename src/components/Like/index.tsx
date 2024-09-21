import './index.scss'
import { useEffect, useState } from 'react'
type Props = {
  isShow: {
    flag: boolean
    num: number
  }
}
const Like = (props: Props) => {
  const { isShow } = props
  const [isLikeOpen, setLikeOpen] = useState(false)
  useEffect(() => {
    setLikeOpen(isShow.flag)
    const timer = setTimeout(() => {
      setLikeOpen(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [isShow])
  return (
    <div>
      {isLikeOpen && (
        <div className='like animate__animated animate__fadeInTopLeft'>
          <h1>THANK U!</h1>
        </div>
      )}
    </div>
  )
}
export default Like
