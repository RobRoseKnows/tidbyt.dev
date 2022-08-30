import React from 'react';

import Box from '@mui/system/Box';
import { Typography } from '@mui/material';

type Props = {
    level: number,
    children: JSX.Element,
}

export default function Heading({ level, children }: Props) {
    const variant = `h${level}`;
    const marginTop = calcMarginTop(level);
    const marginBottom = calcMarginBottom(level);

    function calcMarginTop(level: number): number {
        switch (level) {
            default:
                return 3;
        }
    }

    function calcMarginBottom(level: number): number {
        switch (level) {
            case 1:
                return 3;
            default:
                return 1;
        }
    }

    return (
        <Typography mt={marginTop} mb={marginBottom} variant={variant}>
            {children}
        </Typography>
    );
}