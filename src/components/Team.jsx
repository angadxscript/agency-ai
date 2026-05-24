import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import { motion } from "framer-motion" // Note: updated from motion/react for standard compatibility

const Team = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'
    >
      <Title title='Meet the team' desc='A passionate team of digital experts dedicated to your brands success' />

      {/* Grid Container: Fixed responsiveness */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
        {teamData.map((team, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className='flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-400'
          >
            {/* Image: Fixed size and shrink prevention */}
            <img src={team.image} className='w-12 h-12 rounded-full flex-shrink-0' alt={team.name} />

            {/* Text Content: Aligned left within the card */}
            <div className='flex flex-col text-left overflow-hidden'>
              <h3 className='font-bold text-sm truncate'>{team.name}</h3>
              <p className='text-xs opacity-60 truncate'>{team.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Team