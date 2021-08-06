import Button from 'react-bootstrap/Button'
import editIcon from '../../assets/pencil.svg'
import deleteIcon from '../../assets/trash.svg'
import { PostContext } from '../../contexts/PostContext'
import { useContext } from 'react'

const ActionButtons = ({ url, _id }) => {
	const { setShowDeletePostModal, findPost, setShowUpdatePostModal } = useContext(
		PostContext
	)

	const choosePostUpdate = postId => {
		findPost(postId)
		setShowUpdatePostModal(true)
	}

	const choosePostDelete = postId => {
		findPost(postId)
		setShowDeletePostModal(true)
	}

	return (
		<>
			<Button className='post-button' onClick={choosePostUpdate.bind(this, _id)}>
				<img src={editIcon} alt='edit' width='24' height='24' />
			</Button>
			<Button className='post-button' onClick={choosePostDelete.bind(this, _id)}>
				<img src={deleteIcon} alt='delete' width='24' height='24' />
			</Button>
		</>
	)
}

export default ActionButtons