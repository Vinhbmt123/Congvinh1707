import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState, useEffect } from 'react'
import { PostContext } from '../../contexts/PostContext'

const DeletePostModal = () => {
	// Contexts
	const {
		postState: { post },
		showDeletePostModal,
		setShowDeletePostModal,
		deletePost,
		setShowToast
	} = useContext(PostContext)


    const [deletedPost, setDeletedPost] = useState(post)

	const { _id, title, firstName, lastName, email } = deletedPost

    const closeDialog = () => {
		setDeletedPost(post)
		setShowDeletePostModal(false)
	}

    const onSubmit = async event => {
		event.preventDefault()
		await deletePost(deletedPost._id)
		setShowDeletePostModal(false)
	}


    return (
		<Modal show={showDeletePostModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>Delete this account?</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
					<div>Are you sure?</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={closeDialog}>
						Cancel
					</Button>
					<Button variant='primary' type='submit'>
						Delete!
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default DeletePostModal