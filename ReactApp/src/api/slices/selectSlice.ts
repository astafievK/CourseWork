import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISelectSlice {
    course: ICourse | null
    semester: ISemester | null
    group: IGroup | null
    discipline: IDiscipline | null
    work: IWork | null
    workType: IWorkType | null
}

const selectSlice = createSlice({
    name: 'selects',
    initialState: {
    } as ISelectSlice,
    reducers: {
        setSelectCourse: (state, action: PayloadAction<ICourse>) => {
            state.course = action.payload
        },
        setSelectSemester: (state, action: PayloadAction<ISemester>) => {
            state.semester = action.payload
        },
        setSelectGroup: (state, action: PayloadAction<IGroup>) => {
            state.group = action.payload
        },
        setSelectDiscipline: (state, action: PayloadAction<IDiscipline>) => {
            state.discipline = action.payload
        },
        setSelectWork: (state, action: PayloadAction<IWork>) => {
            state.work = action.payload
        },
        setSelectWorkType: (state, action: PayloadAction<IWorkType>) => {
            state.workType = action.payload
        },
    }
})

export const {
    setSelectCourse,
    setSelectSemester,
    setSelectGroup,
    setSelectDiscipline,
    setSelectWork,
    setSelectWorkType
} = selectSlice.actions
export default selectSlice.reducer
