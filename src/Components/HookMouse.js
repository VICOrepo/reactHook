import { useEffect, useState } from "react"

function HookMouse() {

    const [x,setX] = useState(0)
    const [y, sety] = useState(0)

    const logMousePosition  = e=>{
        console.log('Mouse event')
        setX(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    },[])
  return (
    <div>
        Hooks x - {x} y - {y}
    </div>
  )
}

export default HookMouse