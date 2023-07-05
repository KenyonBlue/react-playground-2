import { configureStore } from "@reduxjs/toolkit";
import personReducer from './features/person/personSlice.tsx'
export const store = configureStore({
    reducer: {
        person: personReducer
    }
});

export default store;