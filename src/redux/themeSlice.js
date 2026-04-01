import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  templateId: 'ats-minimal',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTemplate: (state, action) => {
      state.templateId = action.payload;
    },
  },
});

export const { toggleDarkMode, setTemplate } = themeSlice.actions;
export default themeSlice.reducer;
