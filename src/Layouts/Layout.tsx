import './Layout.scss';
import Header from './Header';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    return (
        <main>
            <div className="box">
                <Header title="BookStore" />
            </div>
            {children}
            <div id="footer" className="box" />
        </main>
    );
};

export default Layout;
