import { BookList } from './ui/BookList';
import { HeaderSearch } from './ui/HeaderSearch';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <HeaderSearch />
            <div className="text-3xl text-blue-950 my-[2.5lvh] text-center">Friends' books</div>
            <BookList />
        </div>
    );
}

// User should be able to
// - Add new books
// - Search for books that they or their friends have
// - Scroll through list of books that friends have
// - Add new friends

/**
 * Database schema:
 * 
 * Users:
 *  - id, first name, last name, email, profile picture, (password hash - skip for now)
 * 
 * Books:
 * - id, title, author, book image, owner_user_id (foreign key to Users)
 * 
 * Friends:
 * - id, user_id1 (foreign key to Users), user_id2 (foreign key to Users), timestamp
 * 
 * Loans:
 * - id, book_id (foreign key to Books), lender_user_id (foreign key to Users), borrower_user_id (foreign key to Users), loan_date, return_date
 */