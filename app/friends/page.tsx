import { HeaderFriend } from '@/app/ui/HeaderFriend'

export default function Friends() {
    return (
        <div className='flex flex-col'>
            <HeaderFriend />
            <div className='flex flex-col h-lvh items-center'>
                <div className='text-2xl p-[3lvh]'>Look at my friends!</div>
            </div>
        </div>
    )
}