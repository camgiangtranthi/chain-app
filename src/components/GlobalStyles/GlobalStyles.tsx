import './GlobalStyles.module.scss';
import React from 'react';

interface childrenProps {
    children: any;
}

export default function GlobalStyles({ children }: childrenProps) {
    return children;
}
