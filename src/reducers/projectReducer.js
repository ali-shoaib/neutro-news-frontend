import {createSlice, nanoid, current} from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
    {
        id:1, 
        date: sub(new Date(), { minutes: 10 }).toISOString(), 
        title:'Todo app', 
        content:'omayova',
        reaction:false
        // reactions: [
        //     {id:1,name:'thumbsUp', toggle: false},
        //     {id:2,name:'wow', toggle: false},
        //     {id:3,name:'heart', toggle: false},
        //     {id:4,name:'rocket', toggle: false},
        // ],
    },
    {
        id:2, 
        date: sub(new Date(), { minutes: 5 }).toISOString(), 
        title:'Notepad app', 
        content:'hello world',
        reaction:false
        // reactions: [
        //     {id:1,name:'thumbsUp', toggle: false},
        //     {id:2,name:'wow', toggle: false},
        //     {id:3,name:'heart', toggle: false},
        //     {id:4,name:'rocket', toggle: false},
        // ],
    },
]

const ProjectReducer = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        createProject: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content, userId){
                return{
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reaction:false
                        // reactions: [
                        //     {id:1,name:'thumbsUp', toggle: false},
                        //     {id:2,name:'wow', toggle: false},
                        //     {id:3,name:'heart', toggle: false},
                        //     {id:4,name:'rocket', toggle: false},
                        // ]
                    }
                }
            }
        },
        reactionAdded(state, action){
            const {id} = action.payload
            const existingPost = state.find(project => project.id === id)
            if (existingPost) {
                existingPost.reaction=!existingPost.reaction
            }
        },
        deleteProject(state, action){
            return state.filter(project => project.id !== action.payload)
        },
        enableEditProject(state, action){
            state.find(project => project.id === action.payload)
        },
        saveEditing(state, action){
            const {editTitle, editContent, editUserId, projectId} = action.payload
            const existingProject = state.find((project) => project.id === projectId);
            if (existingProject) {
                existingProject.title = editTitle;
                existingProject.userId = editUserId;
                existingProject.content = editContent
            }
        }
    }
})

export const selectAllProjects = (state) => state.projects

export const { createProject, reactionAdded, deleteProject, enableEditProject, saveEditing } = ProjectReducer.actions

export default ProjectReducer.reducer