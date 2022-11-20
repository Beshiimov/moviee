const adult_Content = "ADULT-CONTENT-TOGGLE";
const update_Data = "UPDATE-DATA";
const update_Page = "UPDATE-PAGE";
const clean_Store = "CLEAR-STORE";

const initialState = {
  adult: false,
  loading: true,
  page: 1,
  results: [],
  total_pages: "",
  total_results: "",
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case adult_Content:
      return {
        ...state,
        adult: action.boolean,
      };
    case update_Data:
      return {
        ...state,
        loading: false,
        page: action.data.page,
        results: action.data.results,
        total_pages: action.data.total_pages,
        total_results: action.data.total_results,
      };

    case update_Page:
      return {
        ...state,
        loading: true,
        page: action.data.page,
      };

    case clean_Store:
      return {
        ...state,
        loading: true,
        results: [],
        isItSearch: false,
      };

    default:
      return state;
  }
};

export const adultContent = (boolean) => ({ type: adult_Content, boolean });
export const updateData = (data) => ({ type: update_Data, data });
export const updatePage = (page) => ({ type: update_Page, page });
export const cleanStore = () => ({ type: clean_Store });

export default homePageReducer;
