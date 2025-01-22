import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Preloader() {
    const { theme } = useTheme();
    const [percent, setPercent] = useState(0);
  return (
    <div
      className="h-screen transition-colors duration-300 font-grotesk grid place-items-center"
      style={{ color: theme.primaryText, backgroundColor: theme.background }}
    >
        <div className="w-4/5 ">
        {/* Make this text rotate */}
        <p className='text-center text-2xl'>
            ✿
        </p>
        {/* while the counter is sounting there should be another container with theme.accent as its background color that moves from left to right to fill up the percent container */}
            <div className="grid place-items-center p-3" style={{
                backgroundColor: theme.card
            }}>
                <p className="text-sm font-medium">
                    {percent}%
                </p>
            
            </div>
            {/* This text shpuld continuously keep switching while the page is loading
                - Hi, I'm Lily.
                - Welcome to my portfolio
                - This portfolio is a template called Quickview
                - Buy this template, if you like it.
                - Hire me, if you like me.
            */}
            <p className="text-sm text-right mt-2 font-medium">
                Hi, I'm Lily.
            </p>

        </div>
    </div>
  )
}
