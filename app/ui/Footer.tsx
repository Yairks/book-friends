'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faUserGroup, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { JSX } from 'react';

export function Footer() {
    const handleClick = () => {
        console.log("Footer button clicked");
    }

    const friendsLink = (
        <Link href="/friends" className='cursor-pointer flex flex-col items-center justify-center pb-[1lvh]'>
            <FontAwesomeIcon icon={faUserGroup} className='px-[3lvh] text-2xl' />
            <div>Friends</div>
        </Link>
    )

    const searchLink = (
        <Link href="/" className='cursor-pointer flex flex-col items-center justify-center pb-[1lvh]'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='px-[3lvh] text-2xl' />
            <div>Find Books</div>
        </Link>
    )

    const loansLink = (
        <Link href="/loans" onClick={handleClick} className='cursor-pointer flex flex-col items-center justify-center pb-[1lvh]'>
            <FontAwesomeIcon icon={faBookOpen} className='px-[3lvh] text-2xl' />
            <div>Loans</div>
        </Link>
    )

    return (
        <div className='flex flex-row max-w-[90lvh] pl-[2lvh] pr-[3lvh] items-center justify-center sticky bottom-0 bg-lime-50'>
            <AddLink linkElement={friendsLink} path="/friends" />
            <AddLink linkElement={searchLink} path="/" />
            {/* <div className='border-t-2 border-t-black py-[1lvh]'>
                {searchLink}
            </div> */}
            <AddLink linkElement={loansLink} path="/loans" />

        </div >
    );
}

function AddLink({ linkElement, path }: { linkElement: JSX.Element, path: string }) {
    const pathname = usePathname()

    if (pathname === path) {
        return (
            <div className='border-t-[0.1lvh] border-t-black pt-[0.4lvh] pb-[0.5lvh]'>
                {linkElement}
            </div>
        )
    }

    return (
        <div className='border-t-[0.1lvh] border-t-transparent pt-[0.4lvh] text-gray-500 pb-[0.5lvh]'>
            {linkElement}
        </div>
    )
}