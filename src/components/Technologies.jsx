
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiFramer, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { TbBrandNodejs } from 'react-icons/tb'
import { animate, motion } from 'framer-motion'
import { VscVscode } from 'react-icons/vsc'

const iconVariants = (duration) =>({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h1 
        whileInView={{opacity:1, y: 0}}
        initial ={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1, x: 0}}
        initial ={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div
            initial ="initial" 
            animate ="animate"
            variants={iconVariants(2.5)}
            >
                <SiMongodb className='text-green-600 text-7xl'/>
            </motion.div>

            <motion.div
            initial ="initial" 
            animate ="animate"
            variants={iconVariants(3)}
             className='p-4'>
                <SiExpress className='text-7xl'/>
            </motion.div>

            <motion.div
            initial ="initial" 
            animate ="animate"
            variants={iconVariants(5)}
             className='p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div
            initial ="initial" 
            animate ="animate"
            variants={iconVariants(2)}
             className='p-4'>
                <TbBrandNodejs className='text-green-500 text-7xl'/>
            </motion.div>

            <motion.div
            initial ="initial" 
            animate ="animate"
            variants={iconVariants(6)}
             className='p-4'>
                <SiTailwindcss className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div
             initial ="initial" 
            animate ="animate"
            variants={iconVariants(4)}
             className='p-4'>
                <VscVscode className='text-7xl text-cyan-500'/>
            </motion.div>

            <motion.div
             initial ="initial" 
            animate ="animate"
            variants={iconVariants(6)}
             className='p-4'>
                <SiFramer className='text-7xl text-amber-400'/>

            </motion.div>
            

        </motion.div>
      
    </div>
  )
}

export default Technologies
