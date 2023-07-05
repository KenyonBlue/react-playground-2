
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    name: 'kenyon',
    attributes: []
  }
  
  const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        updateName(state, action: PayloadAction<string>) {
          state.name = action.payload
        },
      },
  })

  console.log(personSlice.getInitialState())
  export const { updateName } = personSlice.actions
export default personSlice.reducer