"use client"
import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
// import bgImg from '@/assets/images/bg-2.jpg'
import product1 from '@/assets/images/mint.png'
import Link from 'next/link'

const allData = [
    {
        id: 1,
        title: 'Spiced Mint',
        price: '9.99$',
        image: product1,
    },
    {
        id: 2,
        title: 'Sweet Straweberry',
        price: '9.99$',
        image: product1,
    },
    {
        id: 3,
        title: 'Cool Blueberries',
        price: '9.99$',
        image: product1,
    },
    {
        id: 4,
        title: 'Juicy Lemon',
        price: '9.99$',
        image: product1,
    },
    {
        id: 5,
        title: 'Product name',
        price: '9.99$',
        image: product1,
    },
    {
        id: 6,
        title: 'Fragrant Cinnamon',
        price: '9.99$',
        image: product1,
    },
    {
        id: 7,
        title: 'Summer Cherries',
        price: '9.99$',
        image: product1,
    },
    {
        id: 8,
        title: 'Clean Lavander',
        price: '9.99$',
        image: product1,
    },
]

const ProductsWrapper = ({ title }) => {
    const [data, setData] = useState(null)

    const getProducts = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products?limit=8")
            const data = await res.json()
            setData(data);
        } catch (e) { console.log(er); }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <Fragment>
            <div className="my-8 flex flex-col items-center justify-center gap-5">
                <h1 className='text-3xl font-bold text-black'>{title}</h1>
                <p>Order it for you or for your beloved ones </p>
            </div>
            <div className='w-[1480px] mx-auto mb-10 grid grid-cols-4 gap-8'>
                {
                    data?.map(el => (
                        <div key={el?.id} className='w-[255px] h-[330px] mx-auto rounded-md bg-gray-50'>
                            <Image width={200} height={250} title={el?.title} className='h-[250px] p-4 mx-auto object-contain' alt='dummy image' src={el?.image} />
                            <div className="w-[255px] h-[86px] p-4 flex flex-col rounded-b-md border-b-[1px] bg-white">
                                <Link href={`/products/${el?.id}`} className='font-semibold text-black'>Spiced Mint</Link>
                                <p className='w-full text-end font-semibold text-green-500'>{el?.price}$</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default ProductsWrapper