import './index.scss'
import { randomColor } from '@/util/useRandomColor'

export default function Blog() {
  return (
    <div className='blog'>
      <div className='blogList'>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/142259168?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>Vue3 + Echarts 实现中国地图</h4>
          <p> 2024-09-14 15:27:36 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/141363406?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>Git的常用命令</h4>
          <p> 2024-08-20 18:23:48 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/141193329?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>搞清JS中的包管理工具</h4>
          <p> 2024-08-14 16:55:13 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/140754115?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>reaux和react-redux的基本使用</h4>
          <p> 2024-07-28 19:06:07 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/140751401?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>快速上手Redux</h4>
          <p> 2024-07-11 19:45:53 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/140637540?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>React 路由篇(v6)</h4>
          <p> 2024-07-25 16:16:11 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/137938972?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>创建Vue项目中架构基本流程</h4>
          <p> 2024-04-18 22:05:08 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/138089925?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>Less快速上手</h4>
          <p> 2024-04-22 20:27:49 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/140348430?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>Vue项目发布到GitHub Page的流程及相关小问题</h4>
          <p> 2024-02-12 12:53:00 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/140661539?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>React中useState修改状态的规则</h4>
          <p> 2024-07-24 14:31:40 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/141719111?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>Vue3中 defineProps 与 defineEmits 基本使用</h4>
          <p> 2024-08-30 16:09:08 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/142848150?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>v-model指令的基本使用及详解</h4>
          <p> 2024-10-11 11:57:53 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/140826402?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>js中数组方法reduce的妙用</h4>
          <p> 2024-07-31 16:51:32 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/140691349?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>React 常用基础Hook</h4>
          <p> 2024-08-07 14:13:59 </p>
        </a>
        <a
          className='blogItem animate__animated animate__zoomInUp'
          style={{ borderColor: randomColor() }}
          href='https://blog.csdn.net/Lil_y1/article/details/140613312?spm=1001.2014.3001.5501'
          target='blank'
        >
          <h4>React 路由篇(v5)</h4>
          <p> 2024-07-22 17:54:23 </p>
        </a>
      </div>
    </div>
  )
}
