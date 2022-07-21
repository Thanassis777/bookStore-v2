import './Layout.scss';
import Header from '../components/UI/Header/Header';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    return (
        <main style={{overflow: 'hidden'}}>
            <div className="box">
                <Header title="BookStore" />
            </div>
            {children}
            {/*<div id="footer" className="box" />*/}
        </main>
    );
};

export default Layout;
