export function HeaderFriend() {

    return (
        <div className='flex flex-row max-w-[90lvh] pl-[2lvh] pr-[3lvh] py-[1lvh] items-center justify-center sticky top-0 bg-lime-50'>
            <div className="flex-0 p-1">📖</div>
            <input type="search" placeholder="Search for a book" className="flex-1 p-1 border-2 border-blue-100 rounded-l border-solid bg-white" />
        </div >
    );
}