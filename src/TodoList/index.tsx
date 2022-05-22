import "./TodoList.css"

export const TodoList = (props: any) => {
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.isLoading && props.onLoading()}
            {(!props.isLoading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
            {(!props.isLoading && !props.error) && props.searchedTodos.map(props.render || props.children)}
        </section>
    );
};