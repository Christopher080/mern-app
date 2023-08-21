import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button';


const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                src="https://images.pexels.com/photos/17587498/pexels-photo-17587498/free-photo-of-bird-sitting-on-tree-branch.png?auto=compress&cs=tinysrgb&w=400" 
                alt="" 
                fill={true}
                className={styles.img}/>
                <div className={styles.imgText}>
                    <h1  className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>
                        Handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We? </h1>
                    <p className={styles.Desc}>
                        We are the number one providers of digital technology
                        talent platform for your projects, services and startups.
                    </p>
                </div>
                <div className={styles.item}>
                <h1 className={styles.title}>What we do? </h1>
                <p className={styles.desc}>
                We help you recruit top digital technology
                talents world wide for your projects, services and startups.
                </p>
                <Button url="/contact" text="Contact"/>
                </div>
            </div>
        </div>
    );
};
export default About