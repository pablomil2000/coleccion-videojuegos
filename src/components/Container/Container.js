// import './Container.scss'
import {
  // Coalesce,
  // Shift,
  Swirl,
  // Aurora, 
  // Pipeline,
  // CanvasBackground
} from 'ambient-cbg'
export default function Error ({ children }) {
  return (

    <div>
      <Swirl />
      { children }
    </div>

  )
}