import { ReviewListItemTitle } from './ReviewsListItem.styled';
import { ReviewListItem } from './ReviewsListItem.styled';
export function ReviewsListItem({ review }) {
  return (
    <ReviewListItem>
      <ReviewListItemTitle>Author: {review.author}</ReviewListItemTitle>
      <p>{review.content}</p>
    </ReviewListItem>
  );
}
