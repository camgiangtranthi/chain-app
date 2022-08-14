import './GlobalStyles.module.scss';

interface childrenProps {
    children: any;
}

export default function GlobalStyles({ children }: childrenProps) {
    return children;
}
