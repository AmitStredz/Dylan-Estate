import { Routes, Route } from 'react-router-dom';

import './App.css'
import Page1 from './views/page1'
import Page2 from './views/page2'
import Page3 from './views/page3'
import Page4 from './views/page4'
import Page5 from './views/page5'
import Page6 from './views/page6'
import Page7 from './views/page7'
import Page8 from './views/page8'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/page7" element={<Page7 />} />
      <Route path="/page8" element={<Page8 />} />
      {/* Add other routes here */}
    </Routes>
  )
}