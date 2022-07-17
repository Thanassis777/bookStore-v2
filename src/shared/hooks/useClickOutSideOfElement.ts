import {useEffect} from 'react';
import {useAppDispatch} from '../../store/storeHooks';
import {setIsOpenCart} from '../../store/checkout';

const useClickOutSideOfElement = (ref: any) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target)) {
                dispatch(setIsOpenCart(false));
            }
        };
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};

export default useClickOutSideOfElement;
