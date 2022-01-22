import React from "react";
import { PageHeader } from 'antd';

export interface NavBarProps {
    title: string,
    subTitle?: string,
    extra: React.ReactNode[]
}

export const NavBar: React.FC<NavBarProps> = ({
    title,
    subTitle,
    extra
}) => {

    return (
        <PageHeader
            ghost={false}
            title={title}
            subTitle={subTitle}
            extra={extra}
        />
    )
}