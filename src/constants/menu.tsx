import { Workflow, Blocks, Settings } from 'lucide-react'
import { v4 as uuid } from 'uuid'
import { HomeIcon } from '@/icons/homeIcon'


type FieldProps = {
    label: string
    id: string
}

type SideBarProps = {
    icon: React.ReactNode
}   & FieldProps

export const SIDEBAR_MENU: SideBarProps[] = [
    {
        id: "0",
        label: 'home',
        icon: <HomeIcon />
    },
    {
        id: "1",
        label: 'automations',
        icon: <Workflow />
    },
    {
        id: "2",
        label: 'integrations',
        icon: <Blocks />
    },
    {
        id: "3",
        label: 'settings',
        icon: <Settings />
    }
    
]