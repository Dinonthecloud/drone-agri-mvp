// Minimal starter App — replace with your MVP v2 code when ready
import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{fontFamily:'ui-sans-serif, system-ui', padding: 24}}>
      <h1 style={{fontSize: 24, fontWeight: 700}}>Drone-Agri MVP</h1>
      <p>GitHub Pages 기본 세팅 완료! 이제 <code>src/App.jsx</code> 내용을 당신의 앱 코드로 바꾸면 됩니다.</p>
      <button onClick={()=>setCount(c=>c+1)} style={{marginTop:12, padding:'8px 12px', borderRadius:12, border:'1px solid #ddd'}}>Click {count}</button>
    </div>
  )
}
