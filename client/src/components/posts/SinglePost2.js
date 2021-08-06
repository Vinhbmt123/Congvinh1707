import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ActionButtons from './ActionButtons'

const SinglePost2 = ({ post: {_id, status, title, firstName, lastName, email } }) => (
    <>
        <td>{title}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>
            <ActionButtons _id={_id} />
        </td>
    </>
)

export default SinglePost2