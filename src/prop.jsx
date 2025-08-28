function UserProps({Userobject}) {
    return(
        <div>
            <h1>learning props</h1>
            <h1>{Userobject.username}</h1>
        <h1>{Userobject.Email}</h1>
        <h1>{Userobject.age}</h1>
        </div>
    )
}
export default UserProps;