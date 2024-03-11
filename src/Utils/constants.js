const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY +
  "&q=";
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const SEARCH_LIST_API_KEY =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY +
  "&q=";
