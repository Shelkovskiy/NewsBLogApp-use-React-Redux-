import { RootState } from "../../store";

export const newsSelectors = (state:RootState) => state.news.news;
export const isLoadingNewsSelector =(state:RootState) =>state.news.isLoading;
export const errorNewsSelector = (state:RootState) => state.news.error;