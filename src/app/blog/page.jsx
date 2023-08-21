"use client"
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr"


async function fetcher(url) {
  const res = await fetch(url, {
    cache: 'no-store', // SWR option for caching
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

function Blog() {
  const { data, error } = useSWR('http://localhost:3000/api/posts', fetcher);

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              alt=""
              className={styles.imgage}
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
  
  
  
  
  
  
  
  
  