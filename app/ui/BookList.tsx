import Image from "next/image"

export function BookList() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-3xl text-blue-950 my-[2.5lvh]">Friends' books</div>
            <Book bookNumber={1} />
            <Book bookNumber={2} />
            <Book bookNumber={3} />
            <Book bookNumber={4} />
            <Book bookNumber={5} />
            <Book bookNumber={6} />
            <Book bookNumber={7} />
            <div className='invisible mt-[5lvh]'>Spacer for footer</div>
        </div>
    )
}

function Book({ bookNumber }: { bookNumber: number }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-xl">Harry Potter Book {bookNumber}</div>
            <div className="text-l">J.K. Rowling</div>
            <Image src={"/harry_potter/harry_potter_" + bookNumber + ".jpg"} height={500} width={344} alt={"Picture of Harry Potter Book " + bookNumber} className="max-h-[30lvh] object-contain" />
            <hr className="px-[40lvw] bg-neutral-400 my-[3lvh]" />
        </div>
    )
}