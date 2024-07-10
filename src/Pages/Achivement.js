import React from 'react';
import '../Pages/Achivement.css'
import { motion } from 'framer-motion';

const achievements = [
    {
        title: 'Best Idea Certificate',
        description: 'Awarded at the AVINYA State Level Project Competition.',
    },
    {
        title: 'Software Engineering - Forage',
        description: 'Certified by J.P. Morgan.',
    },
    {
        title: 'Azure AI Fundamentals',
        description: 'Certified by Microsoft Learn.',
    },
    // Add more achievements here
];

const Achievements = () => {
    return (
        <div id='achievements'>
            <div className='myAchievements'>
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='achievement-item'
                    >
                        <h3>{achievement.title}</h3>
                        <p>{achievement.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
