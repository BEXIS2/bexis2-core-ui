import type { FacetGroup } from '$models/Models';

export const groups: FacetGroup[] = [
	{
		children: [
			{ name: 'books', displayName: 'books', count: 1 },
			{ name: 'movies', displayName: 'movies', count: 2 },
			{ name: 'music', displayName: 'music', count: 3 },
			{ name: 'podcasts', displayName: 'podcasts', count: 4 },
			{ name: 'articles', displayName: 'articles', count: 5 },
			{ name: 'blogs', displayName: 'blogs', count: 6 }
		],
		name: 'mediums',
		displayName: 'Mediums'
	},
	{
		children: [
			{ name: 'fiction', displayName: 'fiction', count: 0 },
			{ name: 'non-fiction', displayName: 'non-fiction', count: 1 },
			{ name: 'comedy', displayName: 'comedy', count: 2 },
			{ name: 'drama', displayName: 'drama', count: 3 },
			{ name: 'action', displayName: 'action', count: 4 },
			{ name: 'romance', displayName: 'romance', count: 5 },
			{ name: 'thriller', displayName: 'thriller', count: 6 },
			{ name: 'horror', displayName: 'horror', count: 7 },
			{ name: 'sci-fi', displayName: 'sci-fi', count: 8 },
			{ name: 'fantasy', displayName: 'fantasy', count: 9 },
			{ name: 'adventure', displayName: 'adventure', count: 10 },
			{ name: 'animation', displayName: 'animation', count: 20 },
			{ name: 'biography', displayName: 'biography', count: 30 },
			{ name: 'crime', displayName: 'crime', count: 10 },
			{ name: 'documentary', displayName: 'documentary', count: 0 },
			{ name: 'family', displayName: 'family', count: 1 },
			{ name: 'history', displayName: 'history', count: 2 },
			{ name: 'musical', displayName: 'musical', count: 3 },
			{ name: 'mystery', displayName: 'mystery', count: 4 },
			{ name: 'war', displayName: 'war', count: 5 },
			{ name: 'western', displayName: 'western', count: 6 },
			{ name: 'sport', displayName: 'sport', count: 7 },
			{ name: 'superhero', displayName: 'superhero', count: 8 },
			{ name: 'noir', displayName: 'noir', count: 9 },
			{ name: 'disaster', displayName: 'disaster', count: 10 },
			{ name: 'spy', displayName: 'spy', count: 82 },
			{ name: 'martial arts', displayName: 'martial arts', count: 2 },
			{ name: 'satire', displayName: 'satire', count: 5 },
			{ name: 'black comedy', displayName: 'black comedy', count: 7 },
			{ name: 'psychological thriller', displayName: 'psychological thriller', count: 9 },
			{ name: 'erotica', displayName: 'erotica', count: 3 },
			{ name: 'experimental', displayName: 'experimental', count: 20 },
			{ name: 'political thriller', displayName: 'political thriller', count: 10 },
			{ name: 'coming-of-age', displayName: 'coming-of-age', count: 30 },
			{ name: 'silent film', displayName: 'silent film', count: 40 },
			{ name: 'mockumentary', displayName: 'mockumentary', count: 50 },
			{ name: 'holiday', displayName: 'holiday', count: 10 },
			{ name: 'music', displayName: 'music', count: 10 },
			{ name: 'dance', displayName: 'dance', count: 5 },
			{ name: 'teen', displayName: 'teen', count: 12 }
		],
		name: 'genres',
		displayName: 'Genres'
	},
	{
		children: [
			{ name: 'Stephen King', displayName: 'Stephen King', count: 10 },
			{ name: 'J.K. Rowling', displayName: 'J.K. Rowling', count: 3 },
			{ name: 'Agatha Christie', displayName: 'Agatha Christie', count: 4 },
			{ name: 'Dan Brown', displayName: 'Dan Brown', count: 7, selected: true },
		],
		name: 'authors',
		displayName: 'Authors',
		count: 24
	}
];
