import Students from '../list.json';
function List() {



    return (
        <div>
            <h1>Students</h1>
            <div className={"users"}>
                {Students.map((student) => (
                    <div className={"user"}>
                        <p>
                            {student.name}
                        </p>
                        <p>
                            {student.absences}
                        </p>
                        <p>
                            {student.city}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;