import { API_HOST } from "../utils/constants";

export async function fetchPosts() {
  const response = await fetch(API_HOST + '/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await response.json();
  console.log('Fetched posts:', data); // Log the fetched posts
  return data;
}