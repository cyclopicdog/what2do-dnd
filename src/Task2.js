export default class Task extends React.Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}

<Draggable
    // has two required props
    draggableId={task.id} // the unique id of that content
    index={index} // the index from the map that produces these elements
>
    {/** the draggable element also expects a fucntion as its child */}
    {(provided) => (
        <p
            // we must apply the properties from 'provided to the
            // draggable element
            {...provided.draggableProps} // applied to the component that we want to move
            {...provided.dragHandleProps} // applied the the part of the element
            // that we want to use to move the whole element/component
            // this could be a smaller div in a bigger component
            ref={provided.innerRef}
            style={{
                padding: '5px',
                borderRadius: '5px',
                backgroundColor: 'cadetblue',
                color: 'white',
                fontWeight: 'bold',
            }}
        >
            {task.content}
        </p>
    )}
</Draggable>;
