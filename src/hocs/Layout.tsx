import './Layout.scss';
import Header from '../components/UI/Header/Header';
import FooterInfo from './FooterInfo';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    return (
        <main style={{overflow: 'hidden'}}>
            <div className="header-container">
                <Header title="BookStore" />
            </div>
            {children}
            <div className="footer-container">
                <FooterInfo />
            </div>
        </main>
    );
};

export default Layout;
