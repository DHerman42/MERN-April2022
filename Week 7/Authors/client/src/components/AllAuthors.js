import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import {Card, Table, Button} from 'react-bootstrap';

const AllAuthors = () => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then((res) => {
                console.log(res);
                res.data.sort((a, b) => {
                    if(a.name > b.name)
                        return 1;
                    if(a.name < b.name)
                        return -1;
                    return 0;
                });
                setAllAuthors(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    const handleDelete = (authorId) => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
            .then((res) => {
                console.log('Successfully deleted author');
                console.log(res);
                const filteredAuthors = allAuthors.filter((author) => {
                    return author._id !== authorId;
                });
                setAllAuthors(filteredAuthors);
            })
            .catch((err) => {
                console.log("Error deleting author", err.response);
            });
    };

    return(
        <Card>
            <Card.Header><h5>We have quotes by:</h5></Card.Header>
            <Card.Body>
                <Table variant='sm' striped>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th className='fitcol'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAuthors.map((author, index) => {
                            return(
                                <tr key={index} className='alignrow'>
                                    <td>{author.name}</td>
                                    <td className='fitcol'>
                                        <Link to={`/edit/${author._id}`}>
                                            <Button variant='outline-success'>Edit</Button>
                                        </Link>
                                        <Button
                                            onClick={() => handleDelete(author._id)}
                                            variant='outline-danger ms-3'>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Card.Body>
            <Card.Footer>
                <Link to={'/new'}><Button variant='outline-primary'>Add an Author</Button></Link>
            </Card.Footer>
        </Card>
    );
};

export default AllAuthors;