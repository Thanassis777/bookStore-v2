import React from 'react';

type HeaderProps = {
    title: string;
};

const Header = React.memo(({title}: HeaderProps) => {
    return <h2>{title}</h2>;
});

export default Header;
