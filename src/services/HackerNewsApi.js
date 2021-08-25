import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const newStoriesUrl = `${baseUrl}topstories.json`;
const storyUrl = `${baseUrl}item/`;
const commentUrl = storyUrl;

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl);

  return result.data;
};

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl + storyId}.json`);

  return result.data;
};

export const getComment = async (commentId) => {
  const result = await axios.get(`${commentUrl + commentId}.json`);
  return result.data;
};
