import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { notFound } from "next/navigation";
import { items } from "./data.js";

const getData =  (cat) => {
    const data = items[cat];

    if (data) {
        return data;
    }

    return notFound();
};

const Category = ({params}) => {
    console.log(params)
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Dec</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.img}
                    fill={true} 
                    src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="" />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Dec</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.img}
                    fill={true} 
                    src="https://images.pexels.com/photos/5082575/pexels-photo-5082575.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="" />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Dec</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.img}
                    fill={true} 
                    src="https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="" />
                </div>
            </div>
        </div>
    )
}
export default Category