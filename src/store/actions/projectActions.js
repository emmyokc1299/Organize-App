export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        //const authorId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            displayName: profile.displayName,
            authorId: profile.UID,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
        
    }
}

export const updateProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        const profile = getState().firestore.profile
        firestore.collection('projects').doc(project.id).set({
            authorId: project.authorId,
            createdAt: project.createdAt,
            dateAccepted: project.dateAccepted,
            displayName: project.displayName,
            id: project.id,
            paid: project.paid,
            price: project.price,
            review: project.review,
            status: project.status,
            workName: project.workName
        }).then(() => {
            console.log('This was a massive success')
        }).catch((err) => {
            console.log(`Here's the problem ${err}`)
        })

    }
}

export const deleteProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        const profile = getState().firestore.profile
        firestore.collection('projects').doc(project.id).delete().then(() => {
            console.log('Delete successful')
        }).catch((err) => {
            console.log(`Here's the problem ${err}`)
        })
    }
}


export const selectData = selectedData => ({
    type: 'SELECT_DATA',
    payload: selectedData
})

export const displayModal = () => ({
    type: 'SHOW_MODAL',
})

export const removeModal = () => ({
    type: 'REMOVE_MODAL',
})

export const displayDelete = () => ({
    type: 'SHOW_DELETE'
})

export const removeDelete = () => ({
    type: 'REMOVE_DELETE'
})