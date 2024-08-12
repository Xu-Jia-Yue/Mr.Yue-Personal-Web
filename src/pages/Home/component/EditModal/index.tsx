import { useEffect, useState } from 'react'
import { message, Modal } from 'antd'
import './index.scss'
type Props = {
  isShow: {
    flag: boolean
    num: number
  }
}
const DialogBox = (props: Props) => {
  const { isShow } = props
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(isShow.flag)
  }, [isShow])

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  // 背景颜色列表
  const colorList = ['#4456a7', '#44a75e', '#a74444', '#474747', '#8f3eb0']
  // 选中颜色 active
  const [active, setActive] = useState(0)
  // 按下确定修改颜色
  const [yesColor, setYes] = useState('#4456a7')

  const toggleBg = (color: string, i: number) => {
    setActive(i)
    setYes(color)
  }

  const handleOk = () => {
    setIsModalOpen(false)
    document.getElementsByTagName('body')[0].style.setProperty('--bg', yesColor)
    message.success('背景颜色修改成功')
  }

  return (
    <>
      <Modal
        title='设置'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className='dialogBox'
      >
        <h1>background</h1>
        <div className='setbg'>
          {colorList.map((item, index) => {
            return (
              <span
                style={{ backgroundColor: item }}
                onClick={() => toggleBg(item, index)}
                className={active === index ? 'active' : 'otherActive'}
              ></span>
            )
          })}
        </div>
      </Modal>
    </>
  )
}

export default DialogBox
