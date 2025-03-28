'use client'
import { usePaths } from '@/hooks/user-nav'
import { LogoSmall } from '@/svgs/logo-small'
import React from 'react'
import Items from './items'
import { Separator } from '@/components/ui/separator'
import ClerAuthState from '@/components/global/clerk-auth-state'
import { HelpIcon } from '@/icons/helpIcon'
import { SubscriptionPlan } from '../Subscription-plan'
import UpgradeCard from './upgrade'





type Props = {
    slug: string
}

const Sidebar = ({ slug }: Props) => {
    const { page } = usePaths()

    return (
        <div className="w-[250px] border-[1px] radial fixed left-0 lg:inline-block border-[#545454]
            bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
                <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opacity-90 bg-clip-padding backdrop-filter__safari backdrop-blur-3xl ">
                    <div className="flex gap-x-2 items-center p-5 justify-center">
                        <LogoSmall />
                    </div>
                    <div className="flex flex-col py-3">
                        <Items
                        page={page}
                        slug={slug} />
                    </div>
                    <div className="px-16">
                        <Separator
                                orientation="horizontal"
                                className="bg-zinc-700"
                        />
                    </div>
                    <div className="px-3 flex flex-col gap-y-5">
                        <div className="flex gap-x-2">
                            <ClerAuthState />
                            <p className="text-[#989CA0]">Profile</p>
                        </div>
                        <div className="flex gap-x-3">
                            <HelpIcon />
                            <p className="text-[#989ca0]">Help</p>
                        </div>
                    </div>
                    <SubscriptionPlan>
                        <div className="flex-1 flex flex-col justify-end">
                            <UpgradeCard/>
                        </div>
                    </SubscriptionPlan>
                </div>
        </div>
        
    )
}

export default Sidebar