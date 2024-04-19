import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  counter: number;
  title: string;
}

const initialState: UserState = {
  counter: 0,
  title: "redux toolkit pre",
};

// 创建一个 Slice
export const user = createSlice({
  // 命名空间
  name: "user",

  // 初始化状态值
  initialState,

  // 定义 reducers 并生成关联的操作
  reducers: {
    setCounter(state, { payload }) {
      state.counter = payload;
    },
  },
});

// 导出 reducers 方法
export const { setCounter } = user.actions;

// 默认导出
export default user.reducer;
