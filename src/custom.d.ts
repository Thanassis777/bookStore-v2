declare module '*.svg' {
    // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    // export default content;
    import {ReactElement, SVGProps} from 'react';
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
}
