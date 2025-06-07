export interface CardProps {
    title: string; /* Only allows plain text*/
    content: React.ReactNode; /*allows any valid JSX, including elements, fragments, strings, numbers, etc. */
}