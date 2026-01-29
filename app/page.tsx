import { HeaderSearch } from '@/app/ui/HeaderSearch'
import { BookList } from './ui/BookList';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <HeaderSearch />
            <BookList />
        </div>
    );
}

// User should be able to
// - Add new books
// - Search for books that they or their friends have
// - Scroll through list of books that friends have
// - Add new friends