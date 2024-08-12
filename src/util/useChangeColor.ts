import { useState } from 'react'

const useChangeColor = () => {
  const [color, setColor] = useState('68, 86, 167')
  const changeColor = (color: string) => {
    setColor(color)
  }
  return {
    color,
    changeColor,
  }
}
export default useChangeColor
