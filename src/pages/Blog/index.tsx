import './index.scss'
import { randomColor } from '@/util/useRandomColor'

export default function Blog() {
  return (
    <div className='blog'>
      <div className='blogList'>
        <div className='blogItem' style={{ borderColor: randomColor() }}>
          <h4>忆往事</h4>
          <p>2024-3-17/热度:362</p>
        </div>
        <div className='blogItem' style={{ borderColor: randomColor() }}>
          <h4>忆往事</h4>
          <p>2024-3-17/热度:362</p>
        </div>
        <div className='blogItem' style={{ borderColor: randomColor() }}>
          <h4>忆往事</h4>
          <p>2024-3-17/热度:362</p>
        </div>
        <div className='blogItem' style={{ borderColor: randomColor() }}>
          <h4>忆往事</h4>
          <p>2024-3-17/热度:362</p>
        </div>
        <div className='blogItem' style={{ borderColor: randomColor() }}>
          <h4>忆往事</h4>
          <p>2024-3-17/热度:362</p>
        </div>
        <div className='blogItem' style={{ borderColor: randomColor() }}>
          <h4>忆往事</h4>
          <p>2024-3-17/热度:362</p>
        </div>
        <div className='blogItem' style={{ borderColor: randomColor() }}>
          <h4>忆往事</h4>
          <p>2024-3-17/热度:362</p>
        </div>
        <div className='blogItem' style={{ borderColor: randomColor() }}>
          <h4>忆往事</h4>
          <p>2024-3-17/热度:362</p>
        </div>
        <div className='blogItem' style={{ borderColor: randomColor() }}>
          <h4>忆往事</h4>
          <p>2024-3-17/热度:362</p>
        </div>
      </div>
    </div>
  )
}
