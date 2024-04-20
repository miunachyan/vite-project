import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
}

const initialState: UserState = {
  username: "游客",
};

// 创建一个 Slice
export const user = createSlice({
  // 命名空间
  name: "user",

  // 初始化状态值
  initialState,

  // 定义 reducers 并生成关联的操作
  reducers: {
    setUsername(state, { payload }) {
      state.username = payload;
    },
  },
});

// 导出 reducers 方法
export const { setUsername } = user.actions;

// 默认导出
export default user.reducer;
