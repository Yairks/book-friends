import Image from "next/image"
import { HeaderFriend } from "../../ui/HeaderFriend"
import { BookList } from "../../ui/BookList"

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const people: { [id: string]: { name: string, content: string } } = {
        "0": { name: "Clark Kent", content: "This is the content of my first friend." },
        "1": { name: "My second friend", content: "This is the content of my second friend." },
        "2": { name: "My third friend", content: "This is the content of my third friend." },
    }
    const { slug } = await params
    const post = people[slug]

    return (
        <div className="flex flex-col h-lvh">
            <HeaderFriend />
            <FriendCard post={post} />
            <BookList />
        </div>
    )
}

function FriendCard({ post }: { post: { name: string, content: string } }) {
    return (
        <div className='flex flex-col items-center'>
            <div className='border-2 border-blue-500 rounded-md w-[50lvw] h-[30lvh] my-[.5lvh]'>
                <div className='flex flex-col justify-start items-center border-[1lvw] border-orange-100 h-full rounded-sm'>
                    <Image src="/profiles/male-stock-profile.jpg" height={612} width={564} alt={"Picture of stock person"} className="object-contain max-w-[15lvw] max-h-[15lvh] my-[3lvh]" />
                    <div className="text-xl font-semibold">{post.name}</div>
                    <div className="text-lg text-gray-600">44 books</div>
                </div>
            </div>
        </div>
    )
}