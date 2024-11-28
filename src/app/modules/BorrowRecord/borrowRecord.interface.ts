export interface IBorrowRecord {
  borrowId?: string;
  memberId: string;
  bookId: string;
  borrowDate?: Date;
  returnDate?: Date;
}