import React from 'react';

type HeaderProps = {
    title: string;
};

const Header = React.memo(({title}: HeaderProps) => {
    return <h1 style={{textAlign: 'center'}}>{title}</h1>;
});

export default Header;
