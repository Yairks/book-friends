"use client";

import Image from "next/image"
import Link from 'next/link'
import { HeaderFriend } from "../ui/HeaderFriend"
import { User } from "@shared/types";
import { useState, useEffect } from "react";

export default function Friends() {
    const [friends, setFriends] = useState<User[]>([])

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_HOSTNAME + '/users')
            .then((res) => res.json())
            .then((data) => setFriends(data.data));
    }, []);

    return (
        <div className='flex flex-col bg-white'>
            <HeaderFriend />
            <div className='flex flex-col h-lvh items-center'>
                <div className='text-2xl p-[3lvh]'>Look at my friends!</div>
                <FriendsList friends={friends} />
            </div>
        </div>
    )
}

function FriendsList({ friends }: { friends: User[] }) {
    return (
        <div className='flex flex-col h-lvh items-center'>
            {friends.map((friend) => (
                <Friend key={friend.id} pic={friend.profile_pic!} name={friend.first_name + " " + friend.last_name} id={friend.id} />
            ))}
            <div className='invisible mt-[5lvh]'>Spacer for footer</div>
        </div>
    )
}

function Friend({ pic, name, id }: { pic: string, name: string, id: string }) {
    return (
        <div className='border-2 border-blue-500 rounded-md w-[90lvw] h-[8lvh] my-[.5lvh]'>
            <div className='flex flex-row justify-start items-center border-[1lvw] border-orange-100 h-full rounded-sm'>
                <Image src={"/profiles/" + pic} height={612} width={564} alt={"Picture of stock person"} className="object-contain max-w-[8lvw] max-h-full ml-[2lvw]" />
                <div className="center ml-[3lvw]">{name}</div>
                <Link href={"/friends/" + id} className="cursor-pointer ml-auto mr-[6lvw] text-blue-400">Books</Link>
            </div>
        </div>
    )
}