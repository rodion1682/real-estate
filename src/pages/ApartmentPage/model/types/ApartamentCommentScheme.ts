import { Comment } from 'entities/Comment';

export interface ApartamentCommentScheme {
	isLoading?: boolean;
	error?: string;
	ids: string[];
	entities: Record<string, Comment>;
}
