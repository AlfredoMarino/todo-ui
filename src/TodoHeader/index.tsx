import { Children, cloneElement } from "react";

interface TodoHeaderProps {
    children: any;
    isLoading: boolean;
}

export const TodoHeader = ({ children, isLoading }: TodoHeaderProps) => {
    return (
        <header>
            {Children.toArray(children)
                .map((child: any) => cloneElement(child, { isLoading }))}
        </header>
    );
};