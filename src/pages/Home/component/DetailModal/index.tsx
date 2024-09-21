import { Modal } from 'antd'
import './index.scss'
import { useEffect, useState } from 'react'
type Props = {
  isShow: {
    flag: boolean
    num: number
  }
}
const Detail = (props: Props) => {
  const { isShow } = props
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(isShow.flag)
  }, [isShow])

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <Modal
      title='说明'
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[]}
      width='300px'
      className='detail'
    >
      <div className='logo'>
        <div className='imgBox'>
          <img src='/src/images/神秘人.png' alt='' />
        </div>
        <h3>Mr.Yue Personal Web</h3>
        <h4>V1.0.0</h4>
      </div>
    </Modal>
  )
}

export default Detail
