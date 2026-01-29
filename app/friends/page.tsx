import { HeaderFriend } from '@/app/ui/HeaderFriend'
import Image from "next/image"

export default function Friends() {
    return (
        <div className='flex flex-col bg-white'>
            <HeaderFriend />
            <div className='flex flex-col h-lvh items-center'>
                <div className='text-2xl p-[3lvh]'>Look at my friends!</div>
                <FriendsList />
            </div>
        </div>
    )
}

function FriendsList() {
    return (
        <div className='flex flex-col h-lvh items-center'>
            <Friend pic="/profiles/stock-profile.jpg" name="Marie Curie" />
            <Friend pic="/profiles/male-stock-profile.jpg" name="Clark Kent" />
            <Friend pic="/profiles/male-stock-profile.jpg" name="JK Simmons" />
            <Friend pic="/profiles/stock-profile.jpg" name="Hillary Clinton" />
            <Friend pic="/profiles/male-stock-profile.jpg" name="Rabbi Levine" />
            <Friend pic="/profiles/male-stock-profile.jpg" name="Bill Gates" />
            <Friend pic="/profiles/stock-profile.jpg" name="Sarah Imeinu" />
            <Friend pic="/profiles/stock-profile.jpg" name="Hermione Granger" />
            <Friend pic="/profiles/male-stock-profile.jpg" name="John" />
            <Friend pic="/profiles/male-stock-profile.jpg" name="Paul" />
            <Friend pic="/profiles/male-stock-profile.jpg" name="George" />
            <Friend pic="/profiles/male-stock-profile.jpg" name="Ringo" />
            <div className='invisible mt-[5lvh]'>Spacer for footer</div>
        </div>
    )
}

function Friend({ pic, name }: { pic: string, name: string }) {
    return (
        <div className='border-2 border-blue-500 rounded-md w-[90lvw] h-[8lvh] my-[.5lvh]'>
            <div className='flex flex-row justify-start items-center border-[1lvw] border-orange-100 h-full rounded-sm'>
                <Image src={pic} height={612} width={564} alt={"Picture of stock person"} className="object-contain max-w-[8lvw] max-h-full ml-[2lvw]" />
                <div className="center ml-[3lvw]">{name}</div>
                <div className="cursor-pointer ml-auto mr-[6lvw] text-blue-400">Books</div>
            </div>
        </div>
    )
}