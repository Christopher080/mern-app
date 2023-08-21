import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


export const metadata = {
    title: 'Chris_App Contact Information',
    description: 'This is my Contact page',
  };

const Contact = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Lets Keep In Touch</h1>
        <div className={styles.content}>
        <div className={styles.imgContainer}>
            <Image src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
            />
        </div>
        <form className={styles.form}>
        <input type='text' placeholder='Name' className={styles.input} />
        <input type='text' placeholder='Email' className={styles.input} />
        <textArea 
        className={styles.textArea} 
        placeholder="Message" 
        cols="30" rows="10">

        </textArea>
    <Button url="#" text="Send" />
    </form>
</div>
    </div>
    )
}
export default Contact