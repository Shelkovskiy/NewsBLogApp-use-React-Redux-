import { RootState } from "../../store";

export const blogSelectors = (state:RootState) => state.blogs.blogs;
export const isLoadingSelector =(state:RootState) =>state.blogs.isLoading;
export const errorSelector = (state:RootState) => state.blogs.error;
export const currentPageSelector =(state:RootState) =>state.blogs.currentPage;
export const perPageSelector =(state:RootState) =>state.blogs.perPage;
export const totalCountSelector =(state:RootState) =>state.blogs.totalCount;