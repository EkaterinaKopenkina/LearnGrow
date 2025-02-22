import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const HeaderLayout = forwardRef(({children}, ref) => {
    return (   
        <header ref={ref} className="header">
            <div className="container">{children}</div>
        </header>
    )
})

const MHeaderLayout = motion(HeaderLayout)

export default MHeaderLayout;