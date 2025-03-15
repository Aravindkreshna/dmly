import Sidebar from '@/components/global/sidebar'
import React from 'react'

type Props = {
    slug: string;
    params: { slug: string };
}

const Page = async ({ params }: Props) => {
    //WIP: Server Action Inboard the user
    //WIP: 200 || 201

    return <div>
        <Sidebar slug={params.slug} />
    </div>
}

export default Page