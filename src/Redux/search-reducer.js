const update_Search_Text = "UPDATE-SEARCH-TEXT";
const update_Data = "UPDATE-LIST";
const clean_Store = "CLEAR-STORE";

const initialState = {
  adult: false,
  loading: true,
  searchText: "",
  page: 1,
  results: [],
  total_pages: "",
  total_results: 0,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case update_Search_Text:
      return {
        ...state,
        searchText: action.newText,
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
    case clean_Store:
      return {
        ...state,
        searchText: "",
        loading: true,
        results: [],
        isItSearch: false,
      };

    default:
      return state;
  }
};

export const updateSearchText = (newText) => ({
  type: update_Search_Text,
  newText,
});
export const updateData = (data) => ({ type: update_Data, data });
export const cleanStore = () => ({ type: clean_Store });

export default searchReducer;
