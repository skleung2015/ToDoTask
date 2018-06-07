import React from "react"
import SimpleModalLauncher from "./SimpleModalLauncher"

class ToDoItems extends React.Component {
    constructor(props) {
        super(props)

        this.createTasks = this.createTasks.bind(this)
        this.delete = this.delete.bind(this)
    }

    createTasks(item) {
        return (
            <li>
                {item.text}
                <SimpleModalLauncher buttonLabel="Edit">
                    <div>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>
                            Nullam tincidunt, nisl eget vestibulum rhoncus, elit
                            nisi faucibus quam, sollicitudin posuere massa lacus
                            cursus ligula. Quisque vel turpis a quam posuere
                            lobortis. Aenean risus nunc, pretium eu massa
                            tincidunt, dignissim tincidunt arcu. Integer et
                            mauris vestibulum, pharetra eros nec, feugiat orci.
                        </p>
                    </div>
                </SimpleModalLauncher>
                <button onClick={() => this.delete(item.key)}>Delete</button>
            </li>
        )
    }

    delete(key) {
        this.props.delete(key)
    }

    render() {
        const toDoEntries = this.props.entries
        const listTasks = toDoEntries.map(this.createTasks)

        return <ul className="theList">{listTasks}</ul>
    }
}

export default ToDoItems
