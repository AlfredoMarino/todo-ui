import "./TodoList.css"

export const TodoList = (props: any) => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}