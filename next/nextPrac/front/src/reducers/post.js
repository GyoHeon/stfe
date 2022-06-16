export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "LGH",
      },
      content: 'I"m so sleepy',
      images: [
        {
          src: "https://dimg.donga.com/ugc/CDB/WEEKLY/Article/5b/b3/22/85/5bb32285000ed2738de6.jpg",
        },
        {
          src: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrs_tAcJ1ffrBWnV54rLEwsc113iNvzGtThHIIRWSvcdmkJWgOsKq19_FUPI_mj8-Z2g&usqp=CAU",
        },
      ],
      comments: [
        {
          user: {
            nickname: "dongduu",
          },
          content: "아고 졸리다",
        },
        {
          user: {
            nickname: "dongduu",
          },
          content: "공부는 어렵다",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const dummyPost = {
  id: 2,
  content: "dummy",
  user: {
    id: 1,
    nickname: "LGH",
  },
  images: [],
  comments: [],
};

const ADD_POST = "ADD_POST";
export const addpost = {
  type: ADD_POST,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
