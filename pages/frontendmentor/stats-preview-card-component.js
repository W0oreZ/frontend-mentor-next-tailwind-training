import React from 'react'
import Head from 'next/head'

import { StatsPreviewCard } from '../../src/components/StatsPreviewCard/StatsPreviewCard';

const spccPage = () => {
    return (
        <div className="w-full h-[100vh] bg-dark-500 flex justify-center items-center px-6">
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png"/>
                
                <title>Frontend Mentor | Stats preview card component</title>
            </Head>

            <StatsPreviewCard />
        </div>
    )
}

export default spccPage
